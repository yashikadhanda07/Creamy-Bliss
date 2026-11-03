import { JsonDB } from '../services/db.js';

export const validatePromoCode = (req, res) => {
  try {
    const { code, subtotal = 0 } = req.body;

    if (!code) {
      return res.status(400).json({ success: false, message: 'Coupon code is required' });
    }

    const coupons = JsonDB.getAll('coupons');
    const matched = coupons.find(c => c.code.toUpperCase() === code.trim().toUpperCase() && c.isActive);

    if (!matched) {
      return res.status(404).json({
        success: false,
        valid: false,
        message: 'Invalid or expired coupon code. Try "BLISSJOY" for 20% off!'
      });
    }

    if (matched.minSpend && subtotal < matched.minSpend) {
      return res.status(400).json({
        success: false,
        valid: false,
        message: `Order must be at least $${matched.minSpend.toFixed(2)} to use this code`
      });
    }

    const discountAmount = parseFloat(((subtotal * matched.discountPercent) / 100).toFixed(2));

    res.json({
      success: true,
      valid: true,
      code: matched.code,
      discountPercent: matched.discountPercent,
      discountAmount,
      description: matched.description
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to validate coupon', error: error.message });
  }
};

export const placeOrder = (req, res) => {
  try {
    const { items, customer, deliveryType = 'Eco Chilled Courier', promoCode } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Order must contain at least one flavor item'
      });
    }

    if (!customer || !customer.firstName || !customer.street) {
      return res.status(400).json({
        success: false,
        message: 'Customer name and delivery address are required'
      });
    }

    // Calculate subtotal
    const calculatedSubtotal = items.reduce((acc, item) => {
      const price = parseFloat(item.price) || 0;
      const qty = parseInt(item.quantity, 10) || 1;
      return acc + (price * qty);
    }, 0);

    const subtotal = parseFloat(calculatedSubtotal.toFixed(2));

    // Handle Promo Code
    let discountAmount = 0;
    let validPromoCode = null;

    if (promoCode) {
      const coupons = JsonDB.getAll('coupons');
      const matched = coupons.find(c => c.code.toUpperCase() === promoCode.trim().toUpperCase() && c.isActive);
      if (matched && (!matched.minSpend || subtotal >= matched.minSpend)) {
        validPromoCode = matched.code;
        discountAmount = parseFloat(((subtotal * matched.discountPercent) / 100).toFixed(2));
      }
    }

    // Delivery fee rule: Free over $25, else $3.99
    const deliveryFee = subtotal >= 25 ? 0 : 3.99;
    const total = parseFloat(Math.max(0, subtotal - discountAmount + deliveryFee).toFixed(2));

    // Scoop points calculation (+50 base points + 5 points per item)
    const earnedPoints = 50 + (items.length * 5);

    // Generate readable order ID e.g. CB-84920
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const orderId = `CB-${randomDigits}`;

    const newOrder = {
      id: orderId,
      customer: {
        firstName: customer.firstName || 'Guest',
        lastName: customer.lastName || '',
        email: customer.email || 'guest@creamybliss.com',
        phone: customer.phone || '',
        street: customer.street || '',
        city: customer.city || 'San Francisco',
        postalCode: customer.postalCode || '94103',
        deliveryInstructions: customer.deliveryInstructions || ''
      },
      items,
      subtotal,
      discountCode: validPromoCode,
      discountAmount,
      deliveryFee,
      total,
      earnedPoints,
      status: 'Confirmed',
      deliveryType,
      estimatedDeliveryMinutes: 45,
      createdAt: new Date().toISOString()
    };

    JsonDB.insert('orders', newOrder);

    // Update customer loyalty points in background
    const loyalty = JsonDB.read('loyalty', null);
    if (loyalty) {
      loyalty.points = (loyalty.points || 0) + earnedPoints;
      loyalty.pointsHistory = loyalty.pointsHistory || [];
      loyalty.pointsHistory.unshift({
        id: `pts-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        description: `Order ${orderId}`,
        points: `+${earnedPoints}`
      });
      JsonDB.write('loyalty', loyalty);
    }

    res.status(201).json({
      success: true,
      message: 'Order placed successfully! 🍦 Handcrafted with joy.',
      order: newOrder
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to place order', error: error.message });
  }
};

export const getOrders = (req, res) => {
  try {
    const { status, email } = req.query;
    let orders = JsonDB.getAll('orders');

    if (status) {
      orders = orders.filter(o => o.status.toLowerCase() === status.toLowerCase());
    }

    if (email) {
      orders = orders.filter(o => o.customer?.email?.toLowerCase() === email.toLowerCase());
    }

    // Return most recent first
    orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch orders', error: error.message });
  }
};

export const getOrderById = (req, res) => {
  try {
    const { id } = req.params;
    const order = JsonDB.findById('orders', id);

    if (!order) {
      return res.status(404).json({ success: false, message: `Order #${id} not found` });
    }

    res.json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch order', error: error.message });
  }
};

export const updateOrderStatus = (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowed = ['Confirmed', 'Churning', 'In Transit', 'Delivered', 'Cancelled'];
    if (!status || !allowed.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Status must be one of: ${allowed.join(', ')}`
      });
    }

    const updated = JsonDB.updateById('orders', id, { status });

    if (!updated) {
      return res.status(404).json({ success: false, message: `Order #${id} not found` });
    }

    res.json({
      success: true,
      message: `Order status updated to '${status}'`,
      data: updated
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update order status', error: error.message });
  }
};


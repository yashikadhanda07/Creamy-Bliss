import { JsonDB } from '../services/db.js';

export const subscribeNewsletter = (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({
        success: false,
        message: 'A valid email address is required'
      });
    }

    const cleanEmail = email.trim().toLowerCase();
    const subscribers = JsonDB.getAll('subscribers');

    const existing = subscribers.find(s => s.email.toLowerCase() === cleanEmail);
    if (existing) {
      return res.json({
        success: true,
        alreadySubscribed: true,
        message: 'You are already subscribed to the Bliss Club! Use promo code SUMMER15 for 15% off.',
        couponCode: 'SUMMER15'
      });
    }

    const newSubscriber = {
      id: `sub-${Date.now()}`,
      email: cleanEmail,
      joinedAt: new Date().toISOString()
    };

    JsonDB.insert('subscribers', newSubscriber);

    res.status(201).json({
      success: true,
      message: 'Welcome to the Bliss Club! Check your inbox for 15% off 🍦',
      couponCode: 'SUMMER15',
      discountPercent: 15,
      data: newSubscriber
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to subscribe', error: error.message });
  }
};

export const getSubscribers = (req, res) => {
  try {
    const subscribers = JsonDB.getAll('subscribers');
    res.json({
      success: true,
      count: subscribers.length,
      data: subscribers
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch subscribers', error: error.message });
  }
};


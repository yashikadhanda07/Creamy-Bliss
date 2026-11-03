import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { BRAND_INFO } from '../data/iceCreamData';
import { validateCoupon, submitOrder } from '../services/api';

export const CheckoutPage = () => {
  const { cartItems, cartSubtotal, updateQuantity, clearCart, setActivePage, showToast } = useCart();
  const [promoInput, setPromoInput] = useState('');
  const [discount, setDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState('');
  const [orderComplete, setOrderComplete] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: 'Sofia',
    lastName: 'Martinez',
    street: '742 Evergreen Terrace, Apt 4B',
    city: 'San Francisco',
    postalCode: '94103',
    phone: '(415) 555-0144'
  });

  const deliveryFee = cartSubtotal > 25 ? 0 : 3.99;
  const total = Math.max(0, cartSubtotal - discount + deliveryFee);

  const applyPromo = async (e) => {
    e.preventDefault();
    if (!promoInput.trim()) return;

    try {
      const res = await validateCoupon(promoInput.trim(), cartSubtotal);
      if (res.valid) {
        setDiscount(res.discountAmount);
        setDiscountCode(res.code);
        showToast(`Promo code ${res.code} applied! ${res.discountPercent}% discount added. 🎉`);
        setPromoInput('');
      } else {
        showToast(res.message || 'Invalid promo code. Try "BLISSJOY"!');
      }
    } catch {
      showToast('Error checking coupon. Try "BLISSJOY"!');
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      showToast('Your cart is empty! Add some delicious scoops.');
      return;
    }

    setIsSubmitting(true);
    try {
      const orderPayload = {
        customer: formData,
        items: cartItems,
        promoCode: discountCode || undefined,
        deliveryType: 'Eco Chilled Courier'
      };

      const res = await submitOrder(orderPayload);
      if (res.success) {
        setPlacedOrder(res.order);
        setOrderComplete(true);
        showToast('Order placed successfully! 🍦');
        clearCart();
      } else {
        showToast(res.message || 'Failed to place order.');
      }
    } catch (err) {
      showToast('An error occurred while placing order.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderComplete) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-gutter-sm max-w-lg mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-4 shadow-lg animate-bounce">
          <span className="material-symbols-outlined text-4xl">celebration</span>
        </div>
        <h2 className="font-headline-lg text-on-surface font-bold">Order Confirmed!</h2>
        <p className="font-body-md text-on-surface-variant mt-2 leading-relaxed">
          Your artisanal ice cream is being hand-packed in eco-friendly insulated dry ice boxes.
          It will arrive perfectly chilled right at your door!
        </p>
        <div className="mt-6 p-4 rounded-xl bg-surface-container-lowest border border-surface-container w-full text-left font-body-sm">
          <p className="font-bold text-on-surface mb-1">
            Order #{placedOrder?.id || 'CB-84920'}
          </p>
          <p className="text-on-surface-variant">Estimated Delivery: Today, within {placedOrder?.estimatedDeliveryMinutes || 45} minutes</p>
          <p className="text-tertiary font-semibold mt-1">
            Earned: +{placedOrder?.earnedPoints || 50} Scoop Points! ⭐
          </p>
          <p className="text-xs text-on-surface-variant mt-2">
            Status: <span className="font-semibold text-secondary">{placedOrder?.status || 'Confirmed'}</span>
          </p>
        </div>
        <button
          onClick={() => {
            setOrderComplete(false);
            setPlacedOrder(null);
            setActivePage('home');
          }}
          className="mt-8 px-8 py-3 rounded-full bg-primary text-on-primary font-label-lg font-bold shadow-md hover:brightness-105 active:scale-95 transition-all"
        >
          Return to Gelateria
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full py-6 max-w-4xl mx-auto px-gutter-sm">
      <div className="mb-6">
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Checkout &amp; Order
        </h1>
        <p className="font-body-sm text-on-surface-variant">
          Complete your sweet order for fresh courier delivery or parlor pickup.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left 2 Cols: Delivery & Payment Details */}
        <form onSubmit={handlePlaceOrder} className="md:col-span-2 space-y-6">
          {/* Contact & Delivery */}
          <div className="bg-surface-container-lowest p-6 rounded-lg border border-surface-container shadow-sm">
            <h3 className="font-title-md font-bold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">local_shipping</span>
              1. Delivery Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="font-label-sm uppercase text-on-surface-variant mb-1 block">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full h-11 px-4 rounded-full bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="font-label-sm uppercase text-on-surface-variant mb-1 block">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full h-11 px-4 rounded-full bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>

            <div className="mt-3">
              <label className="font-label-sm uppercase text-on-surface-variant mb-1 block">
                Delivery Address
              </label>
              <input
                type="text"
                required
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                className="w-full h-11 px-4 rounded-full bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label className="font-label-sm uppercase text-on-surface-variant mb-1 block">
                  City
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full h-11 px-4 rounded-full bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="font-label-sm uppercase text-on-surface-variant mb-1 block">
                  ZIP Code
                </label>
                <input
                  type="text"
                  required
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full h-11 px-4 rounded-full bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-surface-container-lowest p-6 rounded-lg border border-surface-container shadow-sm">
            <h3 className="font-title-md font-bold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">credit_card</span>
              2. Payment Method
            </h3>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <label className="flex flex-col items-center p-3 rounded-xl border-2 border-primary bg-primary-fixed/20 cursor-pointer text-center">
                <input type="radio" name="payment" defaultChecked className="hidden" />
                <span className="material-symbols-outlined text-primary mb-1">credit_card</span>
                <span className="font-label-sm font-bold text-on-surface">Card</span>
              </label>

              <label className="flex flex-col items-center p-3 rounded-xl border border-surface-container bg-surface-container-lowest cursor-pointer text-center">
                <input type="radio" name="payment" className="hidden" />
                <span className="material-symbols-outlined text-on-surface mb-1">account_balance_wallet</span>
                <span className="font-label-sm font-bold text-on-surface">Apple / GPay</span>
              </label>

              <label className="flex flex-col items-center p-3 rounded-xl border border-surface-container bg-surface-container-lowest cursor-pointer text-center">
                <input type="radio" name="payment" className="hidden" />
                <span className="material-symbols-outlined text-on-surface mb-1">payments</span>
                <span className="font-label-sm font-bold text-on-surface">Cash On Deliv</span>
              </label>
            </div>

            <div className="space-y-3">
              <div>
                <label className="font-label-sm uppercase text-on-surface-variant mb-1 block">
                  Card Number
                </label>
                <input
                  type="text"
                  required
                  defaultValue="•••• •••• •••• 4242"
                  className="w-full h-11 px-4 rounded-full bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 font-mono"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  defaultValue="12/28"
                  placeholder="MM/YY"
                  className="w-full h-11 px-4 rounded-full bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 font-mono"
                />
                <input
                  type="password"
                  required
                  defaultValue="•••"
                  placeholder="CVC"
                  className="w-full h-11 px-4 rounded-full bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 font-mono"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={cartItems.length === 0}
            className="w-full h-14 rounded-full bg-primary text-on-primary font-headline-sm text-lg font-bold shadow-[0_12px_28px_rgba(178,33,86,0.35)] hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-50"
          >
            Place Sweet Order (${total.toFixed(2)})
          </button>
        </form>

        {/* Right Col: Order Summary */}
        <div className="bg-surface-container-lowest p-6 rounded-lg border border-surface-container shadow-sm h-fit">
          <h3 className="font-title-md font-bold text-on-surface mb-4">Order Summary</h3>

          {cartItems.length === 0 ? (
            <p className="text-on-surface-variant text-sm py-4">No items in cart</p>
          ) : (
            <div className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <div>
                    <p className="font-semibold text-on-surface">{item.name}</p>
                    <p className="text-xs text-on-surface-variant">
                      Qty: {item.quantity} • ${(item.price).toFixed(2)} each
                    </p>
                  </div>
                  <span className="font-bold text-on-surface">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Promo code field */}
          <form onSubmit={applyPromo} className="flex gap-2 my-4 pt-3 border-t border-surface-container">
            <input
              type="text"
              placeholder="Promo code (e.g. BLISSJOY)"
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value)}
              className="flex-1 h-10 px-3 rounded-full bg-surface-container-low border border-surface-container text-xs text-on-surface focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 h-10 rounded-full bg-surface-container-high text-on-surface font-label-sm font-semibold hover:bg-primary hover:text-on-primary transition-colors text-xs"
            >
              Apply
            </button>
          </form>

          {discountCode && (
            <div className="mb-3 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold flex items-center justify-between">
              <span>Code {discountCode} (20% off)</span>
              <button onClick={() => { setDiscount(0); setDiscountCode(''); }}>✕</button>
            </div>
          )}

          <div className="space-y-2 pt-3 border-t border-surface-container text-sm">
            <div className="flex justify-between text-on-surface-variant">
              <span>Subtotal</span>
              <span>${cartSubtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-secondary font-semibold">
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-on-surface-variant">
              <span>Eco Insulated Delivery</span>
              <span>{deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
            </div>
            {deliveryFee === 0 && (
              <p className="text-[11px] text-secondary font-medium">Free delivery over $25 unlocked! 🎉</p>
            )}
            <div className="flex justify-between font-bold text-lg text-primary pt-2 border-t border-surface-container">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


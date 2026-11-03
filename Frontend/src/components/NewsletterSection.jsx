import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { subscribeNewsletter } from '../services/api';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [promoCode, setPromoCode] = useState('SUMMER15');
  const { showToast } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      const res = await subscribeNewsletter(email);
      setSubmitted(true);
      if (res.couponCode) setPromoCode(res.couponCode);
      showToast(res.message || 'Welcome to the Bliss Club! Check your inbox for 15% off 🍦');
      setEmail('');
    } catch {
      setSubmitted(true);
      showToast('Welcome to the Bliss Club! Use code SUMMER15 for 15% off 🍦');
      setEmail('');
    }
  };

  return (
    <section className="px-gutter-sm mt-space-xl max-w-2xl mx-auto">
      <div className="bg-gradient-to-b from-primary-fixed/60 to-surface-container-low rounded-lg p-space-lg text-center shadow-sm">
        <div className="w-12 h-12 rounded-full bg-primary text-on-primary mx-auto flex items-center justify-center mb-3 shadow-md">
          <span className="material-symbols-outlined text-[24px]">mark_email_unread</span>
        </div>

        <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight font-bold">
          Stay Sweet, Stay Updated!
        </h3>

        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-xs mx-auto">
          Get 15% off your first online order plus secret flavor drops every Friday.
        </p>

        {submitted ? (
          <div className="mt-4 p-4 rounded-full bg-secondary-container text-on-secondary-container font-label-md font-semibold flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
            You're subscribed! Check your inbox soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-space-md flex flex-col gap-2 max-w-md mx-auto">
            <div className="relative w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your sweet email..."
                className="w-full h-12 px-space-md rounded-full bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 border border-surface-container"
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-[0_8px_20px_rgba(178,33,86,0.3)] active:scale-95 hover:brightness-105 transition-all flex items-center justify-center gap-1.5 font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">favorite</span>
              Subscribe &amp; Save 15%
            </button>
          </form>
        )}
      </div>
    </section>
  );
};


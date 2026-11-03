import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { BRAND_INFO } from '../data/iceCreamData';

export const SpecialOffer = () => {
  const { showToast, setActivePage } = useCart();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BRAND_INFO.promoCode);
    setCopied(true);
    showToast(`Code ${BRAND_INFO.promoCode} copied to clipboard! 🍦`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-gutter-sm mt-space-xl max-w-7xl mx-auto" id="special-offer">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary via-primary-container to-tertiary-container p-space-lg text-on-primary shadow-[0_20px_40px_-10px_rgba(178,33,86,0.35)]">
        {/* Decorative background swirls */}
        <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-surface-bright/25 backdrop-blur-md text-on-primary font-label-sm text-label-sm uppercase tracking-wider mb-2 font-semibold">
            🎉 Limited Time: 2 Days Left
          </span>

          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl font-bold tracking-tight">
            Double the Scoops, Double the Happiness!
          </h2>

          <p className="font-body-md text-body-md text-primary-fixed mt-2">
            Buy 2 Scoops and Get 1 Free on all sundaes &amp; waffle cones this week!
          </p>

          {/* Code Pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface shadow-md">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
              Use Code:
            </span>
            <span className="font-headline-sm text-headline-sm text-primary font-mono font-bold tracking-wider">
              {BRAND_INFO.promoCode}
            </span>
            <button
              onClick={handleCopy}
              className="text-primary hover:opacity-80 active:scale-90 transition-transform p-1"
              title="Copy Code"
            >
              <span className="material-symbols-outlined text-[18px]">
                {copied ? 'check' : 'content_copy'}
              </span>
            </button>
          </div>

          <button
            onClick={() => setActivePage('menu-flavors')}
            className="mt-5 w-full max-w-sm h-12 rounded-full bg-secondary-container text-on-secondary-container font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-lg active:scale-95 hover:brightness-105 transition-all font-semibold"
          >
            <span className="material-symbols-outlined text-[20px]">celebration</span>
            Grab the Offer Now
          </button>
        </div>
      </div>
    </section>
  );
};


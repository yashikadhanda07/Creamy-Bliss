import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { BRAND_INFO } from '../data/iceCreamData';

export const Footer = () => {
  const { setActivePage, showToast } = useCart();
  const [newsEmail, setNewsEmail] = useState('');

  const handleGazetteSubscribe = (e) => {
    e.preventDefault();
    if (!newsEmail) return;
    showToast('Subscribed to Sweet Gazette! 🍨');
    setNewsEmail('');
  };

  return (
    <footer className="mt-space-xl bg-surface-container-low px-gutter-sm pt-space-xl pb-space-lg rounded-t-lg">
      <div className="max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex flex-col items-center text-center gap-space-sm mb-space-lg">
          <img
            alt="Creamy Bliss Logo"
            className="h-12 w-auto object-contain cursor-pointer"
            src={BRAND_INFO.logoUrl}
            onClick={() => setActivePage('home')}
          />
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            {BRAND_INFO.name}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant italic">
            {BRAND_INFO.tagline}
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mb-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">
              Navigation
            </span>
            <button
              onClick={() => setActivePage('home')}
              className="text-left font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors py-1"
            >
              Home
            </button>
            <button
              onClick={() => setActivePage('menu-flavors')}
              className="text-left font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors py-1"
            >
              Flavors
            </button>
            <button
              onClick={() => setActivePage('best-sellers')}
              className="text-left font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors py-1"
            >
              Best Sellers
            </button>
            <button
              onClick={() => setActivePage('store-locator')}
              className="text-left font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors py-1"
            >
              Store Locator
            </button>
          </div>

          <div className="flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">
              About Us
            </span>
            <button
              onClick={() => setActivePage('our-story')}
              className="text-left font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors py-1"
            >
              Our Story
            </button>
            <button
              onClick={() => setActivePage('reviews')}
              className="text-left font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors py-1"
            >
              Reviews
            </button>
            <button
              onClick={() => setActivePage('loyalty-club')}
              className="text-left font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors py-1"
            >
              Loyalty Club
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className="text-left font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors py-1"
            >
              Contact
            </button>
          </div>

          {/* Sweet Gazette card */}
          <div className="col-span-2 p-space-md rounded-lg bg-surface-container">
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">
                mark_email_unread
              </span>
              <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                Sweet Gazette Newsletter
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm leading-relaxed">
              Get secret batches and tasting invitations right to your inbox.
            </p>
            <form onSubmit={handleGazetteSubscribe} className="flex items-center gap-space-xs">
              <input
                className="w-full h-11 px-space-md rounded-full bg-surface-bright text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary border border-surface-container-high"
                placeholder="Your email address"
                type="email"
                required
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
              />
              <button
                type="submit"
                className="h-11 px-space-md rounded-full bg-primary text-on-primary font-label-md text-label-md whitespace-nowrap active:scale-95 transition-all font-semibold"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-space-md mb-space-md">
          <button
            aria-label="Instagram"
            onClick={() => showToast('Connecting to Instagram...')}
            className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-high active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">photo_camera</span>
          </button>
          <button
            aria-label="TikTok"
            onClick={() => showToast('Connecting to TikTok...')}
            className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-high active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">play_circle</span>
          </button>
          <button
            aria-label="Pinterest"
            onClick={() => showToast('Connecting to Pinterest...')}
            className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-high active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">push_pin</span>
          </button>
        </div>

        {/* Copyright */}
        <p className="font-label-sm text-label-sm text-on-surface-variant text-center pb-2">
          © 2025 Creamy Bliss Artisanal Gelateria. All rights reserved.
        </p>
      </div>
    </footer>
  );
};


import React from 'react';
import { BRAND_INFO } from '../data/iceCreamData';

export const HeroSection = ({ onExploreFlavors, onOrderNow }) => {
  return (
    <section className="relative px-gutter-sm pt-space-md pb-space-lg overflow-hidden">
      {/* Ambient Whipped Glows */}
      <div className="absolute -top-12 -right-16 w-56 h-56 rounded-full bg-primary-fixed/40 blur-3xl pointer-events-none" />
      <div className="absolute top-48 -left-12 w-48 h-48 rounded-full bg-secondary-container/40 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Playful Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider shadow-sm mb-3">
          <span className="material-symbols-outlined text-[14px] text-primary material-symbols-filled">
            auto_awesome
          </span>
          Artisanal Small-Batch Gelato
        </div>

        {/* Headline */}
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight max-w-sm md:max-w-xl">
          Happiness Comes in <span className="text-primary italic">Every Scoop!</span>
        </h1>

        {/* Description */}
        <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xs md:max-w-md">
          Discover your favorite handcrafted flavors and make every single moment sweeter.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-space-sm mt-5 w-full max-w-xs">
          <button
            onClick={onExploreFlavors}
            className="flex-1 h-12 rounded-full bg-gradient-to-b from-primary-container to-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-1.5 shadow-[0_12px_24px_-6px_rgba(255,94,142,0.4)] active:scale-95 hover:brightness-105 transition-all"
          >
            Explore Flavors
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </button>
          
          <button
            onClick={onOrderNow}
            className="flex-1 h-12 rounded-full bg-secondary-container text-on-secondary-container font-label-lg text-label-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-95 hover:brightness-105 transition-all font-semibold"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
            Order Now
          </button>
        </div>

        {/* Hero Visual Showcase */}
        <div className="relative mt-8 w-full max-w-sm mx-auto">
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_20px_40px_-12px_rgba(178,33,86,0.22)] bg-surface-container-high">
            <img
              className="w-full h-full object-cover"
              alt="A luxurious crystal dessert bowl overflowing with decadent artisanal ice cream sundaes, rich chocolate swirls dripping elegantly, fresh ripe strawberries, chocolate wafer rolls, and a delicate mint sprig on a marble counter in soft natural lighting"
              src={BRAND_INFO.heroImageUrl}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/30 via-transparent to-transparent" />
          </div>

          {/* Floating Delight Badges */}
          <div className="absolute -top-3 -left-2 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-[0_8px_20px_rgba(42,23,15,0.08)] flex items-center gap-1.5 text-on-surface">
            <span className="text-[14px]">🍓</span>
            <span className="font-label-sm text-label-sm font-semibold">100% Real Strawberries</span>
          </div>

          <div className="absolute bottom-6 -right-2 bg-surface-container-lowest/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-[0_8px_20px_rgba(42,23,15,0.08)] flex items-center gap-1.5 text-on-surface">
            <span className="material-symbols-outlined text-tertiary text-[16px] material-symbols-filled">
              verified
            </span>
            <span className="font-label-sm text-label-sm font-semibold">Churned Fresh Daily</span>
          </div>

          <div className="absolute -bottom-3 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-[0_8px_20px_rgba(42,23,15,0.08)] flex items-center gap-1.5 text-on-surface">
            <span className="text-[14px]">🍫</span>
            <span className="font-label-sm text-label-sm font-semibold">Belgian Cocoa</span>
          </div>
        </div>
      </div>
    </section>
  );
};


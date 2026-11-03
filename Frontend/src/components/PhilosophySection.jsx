import React from 'react';

export const PhilosophySection = () => {
  return (
    <section className="px-gutter-sm mt-space-xl max-w-7xl mx-auto" id="our-story">
      <div className="bg-surface-container-low rounded-lg p-space-lg shadow-sm">
        <div className="flex items-center gap-2 mb-2 text-primary">
          <span className="material-symbols-outlined text-[20px] material-symbols-filled">
            favorite
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
            Our Philosophy
          </span>
        </div>

        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Made with Love, Served with Happiness.
        </h2>

        <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
          At Creamy Bliss, we slow-churn small batches daily using 100% grass-fed organic milk, ripe seasonal berries picked at peak ripeness, and fair-trade single-origin chocolates. We never use artificial preservatives, high-fructose corn syrup, or synthetic colorings.
        </p>

        {/* 3 Mini Proof Points */}
        <div className="grid grid-cols-3 gap-2 mt-space-md pt-space-sm">
          <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-surface-bright shadow-sm hover:scale-105 transition-transform">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-2">
              <span className="material-symbols-outlined text-[22px]">eco</span>
            </div>
            <span className="font-label-sm text-label-sm font-bold text-on-surface">
              100% Organic
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">
              Farm Dairy
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-surface-bright shadow-sm hover:scale-105 transition-transform">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-[22px]">agriculture</span>
            </div>
            <span className="font-label-sm text-label-sm font-bold text-on-surface">
              Farm to Scoop
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">
              Seasonal Fruit
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-surface-bright shadow-sm hover:scale-105 transition-transform">
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary mb-2">
              <span className="material-symbols-outlined text-[22px]">cake</span>
            </div>
            <span className="font-label-sm text-label-sm font-bold text-on-surface">
              Small-Batch
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">
              Daily Churn
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { PhilosophySection } from '../components/PhilosophySection';

export const OurStoryPage = () => {
  return (
    <div className="flex flex-col w-full py-6">
      <div className="px-gutter-sm max-w-7xl mx-auto mb-6 text-center">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm uppercase tracking-wider font-bold mb-2">
          📖 Since 2018
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Our Story &amp; Heritage
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mt-1">
          A passion for real ingredients, traditional slow-churn methods, and the happiest scoops.
        </p>
      </div>

      <PhilosophySection />

      <div className="px-gutter-sm max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-container">
          <h3 className="font-headline-sm text-primary font-bold mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined">nature_people</span>
            Local Family Farmers
          </h3>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Every gallon of whole milk comes straight from pasture-raised, grass-fed cows at certified regenerative family farms just hours away from our kitchens.
          </p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-container">
          <h3 className="font-headline-sm text-primary font-bold mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined">cookie</span>
            Crisp Handmade Waffle Bowls
          </h3>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Our waffle bowls and cones are hand-rolled fresh on cast-iron presses every twenty minutes, infused with pure vanilla and a touch of brown butter.
          </p>
        </div>
      </div>
    </div>
  );
};


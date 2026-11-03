import React from 'react';
import { FlavorFilter } from '../components/FlavorFilter';
import { FlavorCollection } from '../components/FlavorCollection';
import { BestSellers } from '../components/BestSellers';

export const MenuFlavorsPage = () => {
  return (
    <div className="flex flex-col w-full py-6">
      <div className="px-gutter-sm max-w-7xl mx-auto mb-2 text-center">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm uppercase tracking-wider font-bold mb-2">
          🍧 Handcrafted Daily
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Artisanal Menu &amp; Flavors
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mt-1">
          Explore our seasonal small-batch scoops, Italian gelatos, and dairy-free sorbets.
        </p>
      </div>

      <FlavorFilter />
      <FlavorCollection />
      <div className="mt-8">
        <BestSellers />
      </div>
    </div>
  );
};


import React from 'react';
import { BestSellers } from '../components/BestSellers';
import { SpecialOffer } from '../components/SpecialOffer';

export const BestSellersPage = () => {
  return (
    <div className="flex flex-col w-full py-6">
      <div className="px-gutter-sm max-w-7xl mx-auto mb-4 text-center">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm uppercase tracking-wider font-bold mb-2">
          🔥 Most Loved Recipes
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Customer Favorites
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mt-1">
          These award-winning creations have received over 10,000+ five-star reviews!
        </p>
      </div>

      <BestSellers />
      <SpecialOffer />
    </div>
  );
};


import React from 'react';
import { PromoTicker } from '../components/PromoTicker';
import { HeroSection } from '../components/HeroSection';
import { FlavorFilter } from '../components/FlavorFilter';
import { BestSellers } from '../components/BestSellers';
import { SpecialOffer } from '../components/SpecialOffer';
import { FlavorCollection } from '../components/FlavorCollection';
import { PhilosophySection } from '../components/PhilosophySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { NewsletterSection } from '../components/NewsletterSection';

export const HomePage = ({ onExploreFlavors, onOrderNow }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PromoTicker />
      <HeroSection onExploreFlavors={onExploreFlavors} onOrderNow={onOrderNow} />
      <FlavorFilter />
      <BestSellers />
      <SpecialOffer />
      <FlavorCollection />
      <PhilosophySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
};


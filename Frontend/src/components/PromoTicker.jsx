import React from 'react';
import { PROMO_MESSAGES } from '../data/iceCreamData';

export const PromoTicker = () => {
  return (
    <div className="relative w-full bg-secondary-container/50 text-on-secondary-fixed-variant overflow-hidden py-2 shadow-sm select-none">
      <div className="flex whitespace-nowrap animate-marquee items-center gap-6 text-label-md font-label-md">
        {PROMO_MESSAGES.concat(PROMO_MESSAGES).map((msg, idx) => (
          <React.Fragment key={idx}>
            <span className="flex items-center gap-1.5 font-medium">
              <span className={`material-symbols-outlined text-[16px] ${msg.color}`}>
                {msg.icon}
              </span>
              {msg.text}
            </span>
            <span className="text-outline-variant font-bold">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


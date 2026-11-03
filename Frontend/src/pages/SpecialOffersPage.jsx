import React from 'react';
import { SpecialOffer } from '../components/SpecialOffer';
import { PromoTicker } from '../components/PromoTicker';
import { useCart } from '../context/CartContext';

export const SpecialOffersPage = () => {
  const { addToCart, showToast } = useCart();

  const deals = [
    {
      title: "Trio Tasting Flight",
      desc: "Pick any 3 artisanal pints and save $5 with free dry-ice thermal shipping.",
      badge: "Save $5.00",
      price: "$13.75",
      regular: "$18.75"
    },
    {
      title: "Weekend Sundae Party Pack",
      desc: "4 scoops in handmade waffle bowls with roasted pistachio & hot fudge toppings.",
      badge: "Family Special",
      price: "$21.50",
      regular: "$26.00"
    }
  ];

  return (
    <div className="flex flex-col w-full py-4">
      <PromoTicker />
      <div className="px-gutter-sm max-w-7xl mx-auto my-6 text-center">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-wider font-bold mb-2">
          🎁 Sweet Savings
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Exclusive Special Offers
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mt-1">
          Enjoy delightful discounts, seasonal deals, and bundle promotions.
        </p>
      </div>

      <SpecialOffer />

      <div className="px-gutter-sm max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {deals.map((deal, idx) => (
          <div
            key={idx}
            className="p-space-lg rounded-lg bg-surface-container-lowest shadow-sm border border-surface-container flex flex-col justify-between"
          >
            <div>
              <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-primary font-label-sm font-bold">
                {deal.badge}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-3">
                {deal.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                {deal.desc}
              </p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-surface-container">
              <div>
                <span className="font-headline-md text-primary font-bold">{deal.price}</span>
                <span className="line-through text-outline ml-2 text-sm">{deal.regular}</span>
              </div>
              <button
                onClick={() => {
                  addToCart({ id: `deal-${idx}`, name: deal.title, price: 13.75, unit: 'bundle' }, 1);
                }}
                className="px-4 py-2 rounded-full bg-primary text-on-primary font-label-md font-semibold active:scale-95 transition-all"
              >
                Claim Deal
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


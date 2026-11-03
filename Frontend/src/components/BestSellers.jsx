import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { BEST_SELLERS } from '../data/iceCreamData';
import { fetchBestSellers } from '../services/api';

export const BestSellers = () => {
  const { addToCart } = useCart();
  const [bestSellers, setBestSellers] = useState(BEST_SELLERS);
  const [quantities, setQuantities] = useState({
    'strawberry-delight': 1,
    'belgian-chocolate': 1,
    'vanilla-dream': 1
  });

  const [addedIds, setAddedIds] = useState({});

  useEffect(() => {
    fetchBestSellers().then((data) => {
      if (data && data.length > 0) {
        setBestSellers(data);
      }
    });
  }, []);

  const handleQtyChange = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const handleAdd = (item) => {
    const qty = quantities[item.id] || 1;
    addToCart(item, qty);
    setAddedIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section className="px-gutter-sm mt-space-lg max-w-7xl mx-auto" id="best-sellers">
      <div className="flex items-end justify-between mb-space-sm">
        <div>
          <div className="flex items-center gap-1 text-primary">
            <span className="material-symbols-outlined text-[18px] material-symbols-filled">
              whatshot
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
              Crowd Favorites
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-0.5">
            Our Best Sellers
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            The most coveted scoops loved by thousands
          </p>
        </div>
      </div>

      {/* Top 3 Best Sellers Stack / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        {bestSellers.map((item) => {
          const qty = quantities[item.id] || 1;
          const isAdded = addedIds[item.id];

          return (
            <div
              key={item.id}
              className="relative bg-surface-container-lowest rounded-lg p-space-md shadow-[0_12px_28px_-8px_rgba(42,23,15,0.08)] overflow-hidden flex flex-col justify-between"
            >
              {/* Top Tag */}
              <div
                className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1 shadow-sm font-semibold ${item.tagBg}`}
              >
                <span>{item.tagIcon}</span> {item.tag}
              </div>

              <div>
                {/* Image */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-surface-container mb-space-sm group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={item.alt}
                    src={item.imageUrl}
                  />
                  <div className="absolute bottom-2 right-2 bg-surface-bright/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-on-surface flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-tertiary-container text-[14px] material-symbols-filled">
                      star
                    </span>
                    <span className="font-bold">{item.rating}</span> ({item.reviews})
                  </div>
                </div>

                {/* Details */}
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {item.name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Price & Stepper */}
              <div className="flex items-center justify-between mt-space-sm pt-space-xs border-t border-surface-container/50">
                <div>
                  <span className="font-headline-md text-headline-md text-primary font-bold">
                    ${item.price.toFixed(2)}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {' '}/ {item.unit}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-surface-container-high rounded-full p-1">
                    <button
                      onClick={() => handleQtyChange(item.id, -1)}
                      className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center text-on-surface active:scale-90 transition-transform shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[18px]">remove</span>
                    </button>
                    <span className="font-label-lg text-label-lg w-8 text-center text-on-surface font-semibold">
                      {qty}
                    </span>
                    <button
                      onClick={() => handleQtyChange(item.id, 1)}
                      className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center text-on-surface active:scale-90 transition-transform shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>

                  <button
                    onClick={() => handleAdd(item)}
                    className={`h-10 px-4 rounded-full font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1 shadow-sm active:scale-95 transition-all font-semibold ${
                      isAdded
                        ? 'bg-secondary text-on-secondary'
                        : 'bg-primary text-on-primary hover:brightness-105'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {isAdded ? 'done' : 'add_shopping_cart'}
                    </span>
                    {isAdded ? 'Added!' : 'Add'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};


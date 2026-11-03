import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { ALL_FLAVORS } from '../data/iceCreamData';
import { fetchProducts } from '../services/api';

export const FlavorCollection = () => {
  const { searchQuery, activeCategory, addToCart } = useCart();
  const [flavors, setFlavors] = useState(ALL_FLAVORS);
  const [addedIds, setAddedIds] = useState({});

  useEffect(() => {
    fetchProducts().then((data) => {
      if (data && data.length > 0) {
        setFlavors(data);
      }
    });
  }, []);

  const filteredFlavors = flavors.filter((flavor) => {
    const matchesCategory =
      activeCategory === 'all' || flavor.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      flavor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (flavor.description && flavor.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (flavor.badge && flavor.badge.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleQuickAdd = (flavor) => {
    addToCart(flavor, 1);
    setAddedIds(prev => ({ ...prev, [flavor.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [flavor.id]: false }));
    }, 1200);
  };

  return (
    <section className="px-gutter-sm mt-space-xl max-w-7xl mx-auto">
      <div className="mb-space-md">
        <div className="flex items-center gap-1 text-primary">
          <span className="material-symbols-outlined text-[18px]">icecream</span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
            Artisan Menu
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-0.5">
          Explore All Creations
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Handcrafted fresh in small batches every morning
        </p>
      </div>

      {filteredFlavors.length === 0 ? (
        <div className="py-12 text-center text-on-surface-variant bg-surface-container-lowest rounded-lg p-6">
          <span className="material-symbols-outlined text-4xl text-outline mb-2">
            search_off
          </span>
          <p className="font-title-md font-semibold">No flavors found</p>
          <p className="font-body-sm mt-1">
            Try searching for something else or choosing another category filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-space-sm" id="flavorCollection">
          {filteredFlavors.map((flavor) => {
            const isAdded = addedIds[flavor.id];
            return (
              <div
                key={flavor.id}
                className="flavor-card flex flex-col justify-between bg-surface-container-lowest rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-container mb-2 group">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={flavor.name}
                      src={flavor.imageUrl}
                    />
                    <span
                      className={`absolute top-2 left-2 px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold shadow-xs ${flavor.badgeBg}`}
                    >
                      {flavor.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-tertiary-container mb-1">
                    <span className="material-symbols-outlined text-[14px] material-symbols-filled">
                      star
                    </span>
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">
                      {flavor.rating}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      ({flavor.reviews})
                    </span>
                  </div>

                  <h3 className="font-title-md text-title-md text-on-surface line-clamp-1 font-semibold">
                    {flavor.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5 leading-tight">
                    {flavor.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-surface-container/40">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      ${flavor.price.toFixed(2)}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {flavor.unit}
                    </span>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(flavor)}
                    className={`quick-add-btn w-full h-9 rounded-full font-label-md text-label-md flex items-center justify-center gap-1 active:scale-95 transition-all font-semibold ${
                      isAdded
                        ? 'bg-secondary text-on-secondary'
                        : 'bg-primary-fixed text-on-primary-fixed hover:bg-primary hover:text-on-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {isAdded ? 'done' : 'add'}
                    </span>
                    {isAdded ? 'Added!' : 'Add'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};


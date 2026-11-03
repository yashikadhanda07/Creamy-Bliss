import React from 'react';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../data/iceCreamData';

export const FlavorFilter = () => {
  const { searchQuery, setSearchQuery, activeCategory, setActiveCategory } = useCart();

  return (
    <section className="px-gutter-sm mt-space-md max-w-7xl mx-auto" id="flavors-menu">
      {/* Search Bar */}
      <div className="relative w-full max-w-xl mx-auto">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[22px]">
          search
        </span>
        <input
          id="flavorSearch"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search 20+ artisan flavors..."
          className="w-full h-12 pl-12 pr-10 rounded-full bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm shadow-[0_4px_16px_rgba(42,23,15,0.04)] focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all border border-surface-container"
        />
        {searchQuery ? (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        ) : (
          <button className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-3 mt-2 -mx-gutter-sm px-gutter-sm justify-start md:justify-center">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full font-label-md text-label-md flex items-center gap-1.5 transition-all active:scale-95 ${
                isActive
                  ? 'bg-primary text-on-primary shadow-sm font-semibold'
                  : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
              }`}
            >
              {cat.isEmoji ? (
                <span>{cat.icon}</span>
              ) : (
                <span className="material-symbols-outlined text-[16px]">{cat.icon}</span>
              )}
              {cat.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};


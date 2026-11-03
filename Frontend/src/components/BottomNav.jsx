import React from 'react';
import { useCart } from '../context/CartContext';

export const BottomNav = () => {
  const { activePage, setActivePage } = useCart();

  const navTabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'menu-flavors', label: 'Flavors', icon: 'icecream' },
    { id: 'best-sellers', label: 'Popular', icon: 'star' },
    { id: 'store-locator', label: 'Stores', icon: 'pin_drop' },
    { id: 'loyalty-club', label: 'Perks', icon: 'loyalty' }
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(42,23,15,0.04)] border-t border-surface-container">
      <div className="flex justify-around items-center h-16 px-gutter-sm max-w-xl mx-auto">
        {navTabs.map((tab) => {
          const isActive = activePage === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActivePage(tab.id)}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[44px] min-h-[44px] transition-colors focus:outline-none ${
                isActive
                  ? 'text-primary font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] ${isActive ? 'material-symbols-filled' : ''}`}>
                {tab.icon}
              </span>
              <span className="font-label-sm text-label-sm">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};


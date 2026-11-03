import React from 'react';
import { useCart } from '../context/CartContext';
import { BRAND_INFO } from '../data/iceCreamData';

export const Header = () => {
  const { setIsNavOpen, setIsCartOpen, cartCount, setActivePage } = useCart();

  return (
    <header className="fixed top-0 w-full z-40 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_2px_12px_rgba(42,23,15,0.04)]">
      <div className="h-16 px-gutter-sm flex items-center justify-between gap-space-sm max-w-7xl mx-auto">
        {/* Left: Hamburger & Brand */}
        <div className="flex items-center gap-space-sm">
          <button
            aria-label="Open Menu"
            onClick={() => setIsNavOpen(true)}
            className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high active:scale-95 transition-all focus:outline-none"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
          
          <button
            onClick={() => setActivePage('home')}
            className="flex items-center gap-space-xs text-left focus:outline-none"
          >
            <img
              alt="Creamy Bliss Logo"
              className="h-8 w-auto object-contain"
              src={BRAND_INFO.logoUrl}
            />
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
              {BRAND_INFO.name}
            </span>
          </button>
        </div>

        {/* Right: Search, Cart & Profile */}
        <div className="flex items-center gap-space-xs">
          <button
            aria-label="Search flavors"
            onClick={() => {
              setActivePage('menu-flavors');
              const searchInput = document.getElementById('flavorSearch');
              if (searchInput) searchInput.focus();
            }}
            className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface active:scale-95 transition-all focus:outline-none"
          >
            <span className="material-symbols-outlined text-[24px]">search</span>
          </button>

          <button
            aria-label="View Cart"
            onClick={() => setIsCartOpen(true)}
            className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface active:scale-95 transition-all focus:outline-none"
          >
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary-container text-on-primary font-label-sm text-[11px] font-bold flex items-center justify-center shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          <button
            aria-label="Profile and loyalty"
            onClick={() => setActivePage('loyalty-club')}
            className="w-11 h-11 rounded-full flex items-center justify-center active:scale-95 transition-transform focus:outline-none"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20"
              src={BRAND_INFO.userAvatarUrl}
            />
          </button>
        </div>
      </div>
    </header>
  );
};


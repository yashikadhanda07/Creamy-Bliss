import React from 'react';
import { useCart } from '../context/CartContext';
import { BRAND_INFO } from '../data/iceCreamData';

export const NavigationDrawer = () => {
  const { isNavOpen, setIsNavOpen, activePage, setActivePage } = useCart();

  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'menu-flavors', label: 'Menu & Flavors', icon: 'icecream' },
    { id: 'best-sellers', label: 'Best Sellers', icon: 'auto_awesome' },
    { id: 'special-offers', label: 'Special Offers', icon: 'local_offer' },
    { id: 'our-story', label: 'Our Story', icon: 'menu_book' },
    { id: 'reviews', label: 'Reviews', icon: 'reviews' },
    { id: 'contact', label: 'Contact', icon: 'mail' },
    { id: 'loyalty-club', label: 'Loyalty Club', icon: 'stars' }
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ease-out ${
        isNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm transition-opacity duration-300 ${
          isNavOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setIsNavOpen(false)}
      />

      {/* Drawer panel */}
      <aside
        className={`relative w-4/5 max-w-xs h-full bg-surface-bright shadow-[8px_0_24px_rgba(42,23,15,0.12)] flex flex-col justify-between pt-safe pb-safe transition-transform duration-300 ease-out ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-space-lg overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between pb-space-md border-b border-surface-container">
            <div className="flex items-center gap-space-sm">
              <img
                alt="Creamy Bliss Logo"
                className="h-8 w-auto object-contain"
                src={BRAND_INFO.logoUrl}
              />
              <span className="font-headline-sm text-headline-sm text-primary">
                {BRAND_INFO.name}
              </span>
            </div>
            <button
              aria-label="Close Menu"
              onClick={() => setIsNavOpen(false)}
              className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-space-xs mt-space-sm">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-left transition-colors font-title-md text-title-md ${
                    isActive
                      ? 'bg-primary-fixed text-primary font-bold'
                      : 'text-on-surface hover:bg-surface-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Member loyalty banner footer */}
        <div className="p-space-lg bg-surface-container-low rounded-t-lg">
          <div className="flex items-center gap-space-sm mb-space-sm">
            <img
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
              src={BRAND_INFO.userAvatarUrl}
            />
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                Sweet Member
              </span>
              <span className="font-label-sm text-label-sm text-tertiary">
                240 Scoop Points
              </span>
            </div>
          </div>
          <button
            onClick={() => setActivePage('loyalty-club')}
            className="w-full py-space-sm rounded-full bg-primary text-on-primary font-label-lg text-label-lg text-center block shadow-sm hover:opacity-95 active:scale-95 transition-all"
          >
            Redeem Rewards
          </button>
        </div>
      </aside>
    </div>
  );
};


import React from 'react';
import { useCart } from '../context/CartContext';

export const FloatingCartBar = () => {
  const { cartCount, cartSubtotal, setIsCartOpen } = useCart();

  if (cartCount === 0) return null;

  return (
    <div className="fixed bottom-20 inset-x-0 z-30 px-gutter-sm pointer-events-none flex justify-center animate-bounce-subtle">
      <button
        onClick={() => setIsCartOpen(true)}
        className="pointer-events-auto h-12 px-space-md rounded-full bg-primary-container text-on-primary flex items-center justify-between gap-space-sm shadow-[0_12px_28px_rgba(255,94,142,0.4)] active:scale-95 hover:brightness-105 transition-all max-w-sm w-full"
      >
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
          <span className="font-label-lg text-label-lg font-bold">
            ${cartSubtotal.toFixed(2)} • {cartCount} {cartCount === 1 ? 'scoop' : 'scoops'}
          </span>
        </div>
        <span className="font-label-lg text-label-lg flex items-center gap-0.5 font-semibold">
          View Cart
          <span className="material-symbols-outlined text-[18px]">expand_less</span>
        </span>
      </button>
    </div>
  );
};


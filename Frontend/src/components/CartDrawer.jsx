import React from 'react';
import { useCart } from '../context/CartContext';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    cartCount,
    cartSubtotal,
    setActivePage
  } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ease-out ${
        isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-up bottom sheet */}
      <div
        className={`absolute bottom-0 inset-x-0 bg-surface-bright rounded-t-xl shadow-[0_-8px_32px_rgba(42,23,15,0.14)] pb-safe transition-transform duration-300 ease-out max-w-xl mx-auto ${
          isCartOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="p-space-lg flex flex-col gap-space-md max-h-[85vh]">
          {/* Drag handle */}
          <div className="w-12 h-1 bg-outline-variant/60 rounded-full mx-auto" />

          {/* Title and Close */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Your Sweet Cart
              </span>
              <span className="px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                {cartCount} {cartCount === 1 ? 'scoop' : 'scoops'}
              </span>
            </div>
            <button
              aria-label="Dismiss Cart Preview"
              onClick={() => setIsCartOpen(false)}
              className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Items List */}
          {cartItems.length === 0 ? (
            <div className="py-8 text-center text-on-surface-variant">
              <span className="material-symbols-outlined text-4xl text-primary mb-2">
                icecream
              </span>
              <p className="font-title-md">Your cart is empty</p>
              <p className="font-body-sm text-sm">Add some artisanal scoops to get started!</p>
            </div>
          ) : (
            <div className="space-y-space-sm max-h-60 overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-space-sm rounded bg-surface-container-lowest shadow-sm"
                >
                  <div className="flex items-center gap-space-sm">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.iconBg || 'bg-primary-fixed-dim/40 text-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {item.icon || 'icecream'}
                      </span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-on-surface font-semibold">
                        {item.name}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {item.size || '1 x Pint'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Stepper */}
                    <div className="flex items-center bg-surface-container-high rounded-full p-0.5">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-full bg-surface-bright flex items-center justify-center text-on-surface active:scale-90"
                      >
                        <span className="material-symbols-outlined text-[14px]">remove</span>
                      </button>
                      <span className="font-label-sm w-6 text-center font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-full bg-surface-bright flex items-center justify-center text-on-surface active:scale-90"
                      >
                        <span className="material-symbols-outlined text-[14px]">add</span>
                      </button>
                    </div>

                    <span className="font-label-lg text-label-lg text-on-surface font-bold min-w-[50px] text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Subtotal */}
          <div className="flex items-center justify-between pt-space-xs border-t border-surface-container">
            <span className="font-body-md text-body-md text-on-surface-variant font-medium">
              Subtotal
            </span>
            <span className="font-headline-sm text-headline-sm text-primary font-bold">
              ${cartSubtotal.toFixed(2)}
            </span>
          </div>

          {/* Checkout CTA */}
          <button
            disabled={cartItems.length === 0}
            onClick={() => {
              setIsCartOpen(false);
              setActivePage('checkout');
            }}
            className="w-full h-12 rounded-full bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-space-xs shadow-[0_8px_20px_rgba(178,33,86,0.3)] hover:opacity-95 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Proceed to Checkout
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};


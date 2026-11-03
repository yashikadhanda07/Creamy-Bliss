import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { NavigationDrawer } from './components/NavigationDrawer';
import { CartDrawer } from './components/CartDrawer';
import { FloatingCartBar } from './components/FloatingCartBar';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { MenuFlavorsPage } from './pages/MenuFlavorsPage';
import { BestSellersPage } from './pages/BestSellersPage';
import { SpecialOffersPage } from './pages/SpecialOffersPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { LoyaltyClubPage } from './pages/LoyaltyClubPage';
import { StoreLocatorPage } from './pages/StoreLocatorPage';
import { ContactPage } from './pages/ContactPage';
import { CheckoutPage } from './pages/CheckoutPage';

const MainShell = () => {
  const { activePage, setActivePage, toast } = useCart();

  const handleExploreFlavors = () => {
    const el = document.getElementById('flavors-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActivePage('menu-flavors');
    }
  };

  const handleOrderNow = () => {
    const el = document.getElementById('special-offer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActivePage('special-offers');
    }
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onExploreFlavors={handleExploreFlavors} onOrderNow={handleOrderNow} />;
      case 'menu-flavors':
        return <MenuFlavorsPage />;
      case 'best-sellers':
        return <BestSellersPage />;
      case 'special-offers':
        return <SpecialOffersPage />;
      case 'our-story':
        return <OurStoryPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'loyalty-club':
      case 'profile-loyalty':
        return <LoyaltyClubPage />;
      case 'store-locator':
        return <StoreLocatorPage />;
      case 'contact':
        return <ContactPage />;
      case 'checkout':
        return <CheckoutPage />;
      default:
        return <HomePage onExploreFlavors={handleExploreFlavors} onOrderNow={handleOrderNow} />;
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-20 inset-x-0 z-50 flex justify-center px-4 pointer-events-none animate-bounce-subtle">
          <div className="bg-inverse-surface text-inverse-on-surface px-5 py-2.5 rounded-full shadow-lg font-label-md text-label-md flex items-center gap-2 pointer-events-auto">
            <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
              info
            </span>
            <span>{toast}</span>
          </div>
        </div>
      )}

      {/* Persistent Navigation & Drawers */}
      <Header />
      <NavigationDrawer />
      <CartDrawer />

      {/* Main Content Area */}
      <main className="flex flex-col relative w-full pt-16 pb-36 bg-surface flex-grow">
        {renderCurrentPage()}
        <Footer />
      </main>

      {/* Floating Action Bars */}
      <FloatingCartBar />
      <BottomNav />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainShell />
    </CartProvider>
  );
}


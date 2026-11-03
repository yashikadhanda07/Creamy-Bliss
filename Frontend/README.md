# Creamy Bliss - Artisanal Ice Cream (React.js + Vite)

This is the converted React.js + Vite frontend application for Creamy Bliss, translated from the original Google Stitch prototype (`code.html`).

## 🍦 Features Preserved & Enhanced
- **Full Design Fidelity**: Retains all original colors, typography (Outfit & Plus Jakarta Sans), Google Material Symbols, responsive layouts, and animations.
- **Modular Component Architecture**: Deconstructed into reusable, clean React components (Header, Drawers, Hero, Interactive Filters, Best Sellers, Offers, Story, Reviews, Newsletter, Footer, Bottom Nav, Floating Cart).
- **Interactive State & Cart**:
  - Global `CartContext` with real-time subtotal and quantity calculation.
  - Interactive stepper buttons (+ / -) on cards and inside the slide-up cart drawer.
  - One-click discount coupon code `BLISSJOY` copy with toast alert.
  - Interactive live category filtering and search filter across all artisanal flavors.
  - Slide-out side menu drawer and slide-up cart drawer with backdrop blur.
- **Working Navigation & Routing**:
  - Home Page
  - Menu & Flavors Page
  - Best Sellers Page
  - Special Offers Page
  - Our Story & Philosophy Page
  - Customer Reviews Page
  - Loyalty Club & Rewards Page (with 240 Scoop Points & redeemable perks)
  - Store Locator Page
  - Contact Page
  - Checkout & Order Flow with celebration confirmation screen

## 📁 Project Structure

```
Frontend/
├── public/
│   └── images/
│       ├── artisan_strawberry_delight.png
│       ├── creamy_bliss_store.png
│       └── spectacular_sundae_hero.png
├── src/
│   ├── components/
│   │   ├── BestSellers.jsx
│   │   ├── BottomNav.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── FlavorCollection.jsx
│   │   ├── FlavorFilter.jsx
│   │   ├── FloatingCartBar.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── NavigationDrawer.jsx
│   │   ├── NewsletterSection.jsx
│   │   ├── PhilosophySection.jsx
│   │   ├── PromoTicker.jsx
│   │   ├── SpecialOffer.jsx
│   │   └── TestimonialsSection.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── iceCreamData.js
│   ├── pages/
│   │   ├── BestSellersPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoyaltyClubPage.jsx
│   │   ├── MenuFlavorsPage.jsx
│   │   ├── OurStoryPage.jsx
│   │   ├── ReviewsPage.jsx
│   │   ├── SpecialOffersPage.jsx
│   │   └── StoreLocatorPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Running the Project

To start the Vite development server:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```


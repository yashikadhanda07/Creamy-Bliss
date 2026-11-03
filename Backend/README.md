# 🍨 Creamy Bliss - Backend API Server

A robust, RESTful Node.js + Express backend service for the Creamy Bliss Artisanal Ice Cream E-Commerce platform.

---

## 🚀 Features

- **Products & Menu API**: Category filtering, real-time search, sorting (price, rating, name), and best-sellers tracking.
- **Orders & Checkout API**: Calculates subtotal, validates promo coupons, computes eco courier delivery fees, calculates Scoop Points, and generates unique order receipts (`CB-XXXXX`).
- **Loyalty Program API**: Member profile with Gold Tier status, live Scoop points balance (240+), redeemable rewards catalog, and voucher code generation.
- **Reviews & Testimonials API**: Verified customer scooper reviews, average rating calculation, and star breakdown.
- **Parlors & Store Locations API**: Flagship parlors, locations, operating hours, coordinates, and contact details.
- **Contact & Inquiries API**: Customer support message submission and management.
- **Newsletter API**: Email newsletter subscriptions with automatic welcome 15% discount coupon generation (`SUMMER15`).
- **Interactive Visual Explorer**: Built-in HTML documentation dashboard accessible at `http://localhost:5000/`.
- **Zero-Config Database**: Automatic self-seeding JSON file storage (`src/data/storage/`) with atomic writes—no external database setup or native build tools required.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js (v18+)
- **Framework**: Express 4.x (ES Modules)
- **Middleware**: CORS, Morgan HTTP logger, Custom error handlers
- **Storage**: JSON File Database with atomic temp-swap writes
- **Testing**: Built-in Node test suite (`node test.js`)

---

## 📂 Project Structure

```
Backend/
├── src/
│   ├── config/             # Environment & configuration loader
│   │   └── index.js
│   ├── controllers/        # Business logic controllers
│   │   ├── brandController.js
│   │   ├── contactController.js
│   │   ├── locationController.js
│   │   ├── loyaltyController.js
│   │   ├── newsletterController.js
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   └── reviewController.js
│   ├── data/
│   │   ├── seed.js         # Auto-seeding logic
│   │   ├── seedData.js     # Default flavor catalogs, reviews, locations
│   │   └── storage/        # File-backed JSON databases
│   ├── middlewares/        # Custom logging & error handling
│   │   ├── errorHandler.js
│   │   └── logger.js
│   ├── routes/             # Express API route modules
│   │   ├── contactRoutes.js
│   │   ├── index.js        # Main API aggregator (/api)
│   │   ├── locationRoutes.js
│   │   ├── loyaltyRoutes.js
│   │   ├── newsletterRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   └── reviewRoutes.js
│   ├── services/
│   │   └── db.js           # Generic atomic JSON DB service
│   └── app.js              # Express application configuration
├── .env                    # Environment variables
├── .env.example
├── package.json
├── server.js               # HTTP server entry point
├── test.js                 # Automated API test suite (28 assertions)
└── README.md
```

---

## 🏁 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Database Seeding (Optional - happens automatically on startup)
```bash
npm run seed
```

### 3. Start Development Server (with hot reload)
```bash
npm run dev
```

Or standard start:
```bash
npm start
```

The server will start at:
- **API Base**: `http://localhost:5000/api`
- **Interactive Dashboard**: `http://localhost:5000/`
- **Health Check**: `http://localhost:5000/api/health`

### 4. Run Test Suite
```bash
npm test
```

---

## 📋 API Endpoints

### 1. Products & Flavors
| Method | Endpoint | Query / Body Params | Description |
|---|---|---|---|
| `GET` | `/api/products` | `?category=berries&search=strawberry&sort=price-asc` | List all flavors with filters |
| `GET` | `/api/products/bestsellers` | — | Top 3 crowd favorites |
| `GET` | `/api/products/categories` | — | All categories with flavor counts |
| `GET` | `/api/products/:id` | — | Details for single flavor |
| `POST` | `/api/products` | `{ name, price, category, description, imageUrl }` | Create new flavor |
| `PUT` | `/api/products/:id` | `{ price, inStock, ... }` | Update flavor |
| `DELETE` | `/api/products/:id` | — | Remove flavor |

### 2. Orders & Checkout
| Method | Endpoint | Payload | Description |
|---|---|---|---|
| `POST` | `/api/orders` | `{ customer, items, promoCode }` | Place order, apply discounts & points |
| `GET` | `/api/orders` | `?status=Confirmed&email=...` | List past orders |
| `GET` | `/api/orders/:id` | — | Get order receipt (e.g. `CB-84920`) |
| `PATCH` | `/api/orders/:id/status` | `{ status: "Delivered" }` | Update order fulfillment status |
| `POST` | `/api/orders/validate-coupon` | `{ code: "BLISSJOY", subtotal: 20 }` | Check promo code & discount amount |

### 3. Loyalty Club & Rewards
| Method | Endpoint | Payload | Description |
|---|---|---|---|
| `GET` | `/api/loyalty` | — | Member points, tier, and perks catalog |
| `POST` | `/api/loyalty/redeem` | `{ rewardId: 1 }` | Redeem points for voucher code |

### 4. Customer Reviews
| Method | Endpoint | Payload | Description |
|---|---|---|---|
| `GET` | `/api/reviews` | `?limit=5` | Customer testimonials and star breakdown |
| `POST` | `/api/reviews` | `{ name, rating: 5, review, flavor }` | Submit new review (+20 points) |

### 5. Locations, Contact & Newsletter
| Method | Endpoint | Payload | Description |
|---|---|---|---|
| `GET` | `/api/locations` | — | Flagship parlors & gelato boutiques |
| `POST` | `/api/contact` | `{ name, email, subject, message }` | Send message to scoop team |
| `POST` | `/api/newsletter/subscribe` | `{ email }` | Subscribe email (unlocks `SUMMER15`) |


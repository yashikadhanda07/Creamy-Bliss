# 🍨 Creamy Bliss - Artisanal Ice Cream E-Commerce (Full Stack)

A full-stack e-commerce web application featuring handcrafted artisanal gelatos and ice cream scoops in crisp waffle bowls.

---

## 🏗️ Architecture Overview

The project is structured into modular frontend and backend applications:

```
├── Backend/                 # Node.js + Express RESTful API server
│   ├── src/
│   │   ├── config/          # Port, CORS, environment settings
│   │   ├── controllers/     # Products, Orders, Reviews, Loyalty, Contact, Newsletter
│   │   ├── data/            # JSON file persistence with auto-seeding
│   │   ├── middlewares/     # Logging, error handling, not-found routing
│   │   ├── routes/          # Express route definitions
│   │   ├── services/        # Thread-safe atomic JSON DB engine
│   │   └── app.js           # Express app setup & HTML dashboard
│   ├── .env                 # Backend environment configuration
│   ├── package.json
│   ├── server.js            # Server entry point (Default: port 5000)
│   └── test.js              # Comprehensive automated test suite (28 tests)
│
├── Frontend/                # React 18 + Vite + Tailwind CSS frontend
│   ├── src/
│   │   ├── components/      # UI components (Header, Drawers, BestSellers, etc.)
│   │   ├── context/         # CartContext & navigation state
│   │   ├── data/            # Local data & fallback datasets
│   │   ├── pages/           # Pages (Home, Menu, Checkout, Loyalty, Reviews, etc.)
│   │   └── services/        # API client integration (api.js)
│   ├── package.json
│   └── vite.config.js       # Vite dev server with /api proxy to port 5000
│
├── package.json             # Root helper scripts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (installed with Node)

---

### Step 1: Start the Backend Server

Open a terminal and run:

```bash
cd Backend
npm install
npm run dev
```

The backend server starts on **`http://localhost:5000`**.
- 🌟 **API Documentation Dashboard**: Visit [`http://localhost:5000/`](http://localhost:5000/) in your browser.
- 🩺 **Health Check**: [`http://localhost:5000/api/health`](http://localhost:5000/api/health).
- 🧪 **Run Test Suite**:
  ```bash
  cd Backend
  npm test
  ```
  *(Runs 28 automated tests covering all endpoints, coupons, and orders).*

---

### Step 2: Start the Frontend Application

In a second terminal, run:

```bash
cd Frontend
npm install
npm run dev
```

The frontend will open at **`http://localhost:5173`**.

> **Note on API Proxying**: The Vite development server automatically forwards all `/api/*` calls directly to the Express server at `http://localhost:5000` with CORS preconfigured. If the backend is temporarily offline, the frontend will seamlessly fall back to local data so that the app remains interactive!

---

## 🍧 Backend REST API Endpoints

| Resource | Method | Endpoint | Description |
|---|---|---|---|
| **Health** | `GET` | `/api/health` | Service uptime and status check |
| **Brand Info** | `GET` | `/api/brand` | Brand metadata, delivery rules & active promo |
| **Products** | `GET` | `/api/products` | All flavors (supports `?category`, `?search`, `?sort`) |
| **Best Sellers** | `GET` | `/api/products/bestsellers` | Top 3 crowd favorite scoops |
| **Categories** | `GET` | `/api/products/categories` | Categories with live product count badges |
| **Product Detail**| `GET` | `/api/products/:id` | Single product by id/slug |
| **Validate Coupon**| `POST` | `/api/orders/validate-coupon`| Validates `BLISSJOY` (20%), `SUMMER15` (15%), etc. |
| **Place Order** | `POST` | `/api/orders` | Places order, calculates points (+50), returns `CB-XXXXX` |
| **Order Receipt**| `GET` | `/api/orders/:id` | Fetches order status & summary |
| **Loyalty Club** | `GET` | `/api/loyalty` | Gold tier profile, points balance & rewards catalog |
| **Redeem Perk** | `POST` | `/api/loyalty/redeem` | Deducts points & generates voucher code |
| **Reviews** | `GET` | `/api/reviews` | Verified scooper testimonials & ratings |
| **Post Review** | `POST` | `/api/reviews` | Submits customer review (+20 points bonus) |
| **Locations** | `GET` | `/api/locations` | Parlor boutiques, operating hours, coordinates |
| **Contact** | `POST` | `/api/contact` | Submits inquiry note to scoop team |
| **Newsletter** | `POST` | `/api/newsletter/subscribe`| Subscribes email & unlocks `SUMMER15` promo code |


import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import apiRouter from './routes/index.js';
import { requestLogger } from './middlewares/logger.js';
import { notFoundHandler, errorHandler } from './middlewares/errorHandler.js';
import { config } from './config/index.js';
import { seedDatabase } from './data/seed.js';

// Auto-seed database files on app initialization
seedDatabase();

const app = express();

// Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(requestLogger);

// Root visual documentation endpoint
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Creamy Bliss API 🍨</title>
  <style>
    :root {
      --primary: #b22156;
      --primary-light: #fbebee;
      --bg: #fffbf9;
      --card: #ffffff;
      --text: #2c2523;
      --muted: #6b6360;
      --accent: #2c9c72;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      margin: 0;
      padding: 40px 20px;
      line-height: 1.6;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
    }
    header {
      text-align: center;
      margin-bottom: 40px;
    }
    .logo {
      font-size: 50px;
      margin-bottom: 8px;
    }
    h1 {
      margin: 0;
      color: var(--primary);
      font-size: 32px;
      font-weight: 800;
    }
    .status-badge {
      display: inline-block;
      background: #e6f7ef;
      color: var(--accent);
      padding: 4px 14px;
      border-radius: 999px;
      font-weight: bold;
      font-size: 14px;
      margin-top: 10px;
    }
    .card {
      background: var(--card);
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      padding: 24px 30px;
      margin-bottom: 24px;
      border: 1px solid #f1eae8;
    }
    h2 {
      margin-top: 0;
      font-size: 20px;
      color: var(--primary);
      border-bottom: 2px solid var(--primary-light);
      padding-bottom: 8px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
    }
    th, td {
      text-align: left;
      padding: 10px 12px;
      border-bottom: 1px solid #f4eeec;
      font-size: 14px;
    }
    th {
      color: var(--muted);
      font-weight: 600;
      text-transform: uppercase;
      font-size: 12px;
    }
    .badge {
      display: inline-block;
      padding: 3px 8px;
      border-radius: 6px;
      font-weight: bold;
      font-size: 12px;
      font-family: monospace;
    }
    .badge-get { background: #e0f2fe; color: #0369a1; }
    .badge-post { background: #dcfce7; color: #15803d; }
    .badge-put { background: #fef3c7; color: #b45309; }
    .badge-patch { background: #f3e8ff; color: #7e22ce; }
    .badge-delete { background: #fee2e2; color: #b91c1c; }
    code {
      font-family: Consolas, monospace;
      color: var(--primary);
      background: var(--primary-light);
      padding: 2px 6px;
      border-radius: 4px;
    }
    a {
      color: var(--primary);
      text-decoration: none;
      font-weight: 600;
    }
    a:hover {
      text-decoration: underline;
    }
    footer {
      text-align: center;
      color: var(--muted);
      margin-top: 40px;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="logo">🍨</div>
      <h1>Creamy Bliss Backend API</h1>
      <p>Handcrafted Joy in Every Scoop &bull; RESTful Node.js + Express Backend</p>
      <div class="status-badge">&bull; Operational &bull; Port ${config.port}</div>
    </header>

    <div class="card">
      <h2>🍨 Products &amp; Flavors API</h2>
      <table>
        <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
        <tr><td><span class="badge badge-get">GET</span></td><td><a href="/api/products" target="_blank"><code>/api/products</code></a></td><td>List all flavors (supports ?category, ?search, ?sort)</td></tr>
        <tr><td><span class="badge badge-get">GET</span></td><td><a href="/api/products/bestsellers" target="_blank"><code>/api/products/bestsellers</code></a></td><td>List top 3 best seller ice creams</td></tr>
        <tr><td><span class="badge badge-get">GET</span></td><td><a href="/api/products/categories" target="_blank"><code>/api/products/categories</code></a></td><td>List categories with item counts</td></tr>
        <tr><td><span class="badge badge-get">GET</span></td><td><code>/api/products/:id</code></td><td>Get single flavor details</td></tr>
        <tr><td><span class="badge badge-post">POST</span></td><td><code>/api/products</code></td><td>Create new artisanal flavor</td></tr>
        <tr><td><span class="badge badge-put">PUT</span></td><td><code>/api/products/:id</code></td><td>Update flavor details</td></tr>
        <tr><td><span class="badge badge-delete">DELETE</span></td><td><code>/api/products/:id</code></td><td>Remove flavor</td></tr>
      </table>
    </div>

    <div class="card">
      <h2>🛍️ Orders &amp; Checkout API</h2>
      <table>
        <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
        <tr><td><span class="badge badge-post">POST</span></td><td><code>/api/orders</code></td><td>Place customer order &amp; award points</td></tr>
        <tr><td><span class="badge badge-get">GET</span></td><td><a href="/api/orders" target="_blank"><code>/api/orders</code></a></td><td>List all customer orders</td></tr>
        <tr><td><span class="badge badge-get">GET</span></td><td><code>/api/orders/:id</code></td><td>Get order receipt by ID (e.g. CB-84920)</td></tr>
        <tr><td><span class="badge badge-patch">PATCH</span></td><td><code>/api/orders/:id/status</code></td><td>Update order status (Confirmed, Churning, In Transit, Delivered)</td></tr>
        <tr><td><span class="badge badge-post">POST</span></td><td><code>/api/orders/validate-coupon</code></td><td>Validate promo discount code (e.g. BLISSJOY)</td></tr>
      </table>
    </div>

    <div class="card">
      <h2>⭐ Community Reviews &amp; Loyalty Program</h2>
      <table>
        <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
        <tr><td><span class="badge badge-get">GET</span></td><td><a href="/api/reviews" target="_blank"><code>/api/reviews</code></a></td><td>Get verified customer reviews &amp; ratings</td></tr>
        <tr><td><span class="badge badge-post">POST</span></td><td><code>/api/reviews</code></td><td>Submit review (+20 Scoop Points bonus)</td></tr>
        <tr><td><span class="badge badge-get">GET</span></td><td><a href="/api/loyalty" target="_blank"><code>/api/loyalty</code></a></td><td>Get loyalty points, tier, perks catalog</td></tr>
        <tr><td><span class="badge badge-post">POST</span></td><td><code>/api/loyalty/redeem</code></td><td>Redeem reward voucher with points</td></tr>
      </table>
    </div>

    <div class="card">
      <h2>📍 Parlor Locations &amp; Engagement</h2>
      <table>
        <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
        <tr><td><span class="badge badge-get">GET</span></td><td><a href="/api/locations" target="_blank"><code>/api/locations</code></a></td><td>List scoop parlors &amp; boutique stores</td></tr>
        <tr><td><span class="badge badge-post">POST</span></td><td><code>/api/contact</code></td><td>Submit customer note/inquiry</td></tr>
        <tr><td><span class="badge badge-post">POST</span></td><td><code>/api/newsletter/subscribe</code></td><td>Subscribe to newsletter (15% promo code)</td></tr>
        <tr><td><span class="badge badge-get">GET</span></td><td><a href="/api/health" target="_blank"><code>/api/health</code></a></td><td>Service health check</td></tr>
      </table>
    </div>

    <footer>
      &copy; ${new Date().getFullYear()} Creamy Bliss Artisanal Gelateria. All rights reserved.
    </footer>
  </div>
</body>
</html>
  `);
});

// Mount /api
app.use('/api', apiRouter);

// 404 Handler
app.use(notFoundHandler);

// Centralized Error Handler
app.use(errorHandler);

export default app;


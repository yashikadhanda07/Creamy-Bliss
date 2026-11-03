import express from 'express';
import productRoutes from './productRoutes.js';
import orderRoutes from './orderRoutes.js';
import reviewRoutes from './reviewRoutes.js';
import loyaltyRoutes from './loyaltyRoutes.js';
import locationRoutes from './locationRoutes.js';
import contactRoutes from './contactRoutes.js';
import newsletterRoutes from './newsletterRoutes.js';
import { getBrandInfo } from '../controllers/brandController.js';

const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'Creamy Bliss Artisanal Gelato & Ice Cream API',
    timestamp: new Date().toISOString(),
    uptime: `${Math.round(process.uptime())}s`
  });
});

// Brand Info
router.get('/brand', getBrandInfo);

// Sub-routes
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);
router.use('/reviews', reviewRoutes);
router.use('/loyalty', loyaltyRoutes);
router.use('/locations', locationRoutes);
router.use('/contact', contactRoutes);
router.use('/newsletter', newsletterRoutes);

export default router;


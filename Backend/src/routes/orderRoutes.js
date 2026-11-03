import express from 'express';
import {
  placeOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  validatePromoCode
} from '../controllers/orderController.js';

const router = express.Router();

router.post('/', placeOrder);
router.get('/', getOrders);
router.post('/validate-coupon', validatePromoCode);
router.get('/:id', getOrderById);
router.patch('/:id/status', updateOrderStatus);

export default router;


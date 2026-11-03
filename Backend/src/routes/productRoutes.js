import express from 'express';
import {
  getProducts,
  getBestSellers,
  getCategories,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/bestsellers', getBestSellers);
router.get('/categories', getCategories);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;


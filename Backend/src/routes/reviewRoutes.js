import express from 'express';
import { getReviews, submitReview } from '../controllers/reviewController.js';

const router = express.Router();

router.get('/', getReviews);
router.post('/', submitReview);

export default router;


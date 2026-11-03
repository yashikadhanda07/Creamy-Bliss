import express from 'express';
import { getLoyaltyProfile, redeemReward } from '../controllers/loyaltyController.js';

const router = express.Router();

router.get('/', getLoyaltyProfile);
router.post('/redeem', redeemReward);

export default router;


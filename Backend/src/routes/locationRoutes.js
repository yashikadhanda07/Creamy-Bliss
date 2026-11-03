import express from 'express';
import { getLocations, getLocationById } from '../controllers/locationController.js';

const router = express.Router();

router.get('/', getLocations);
router.get('/:id', getLocationById);

export default router;


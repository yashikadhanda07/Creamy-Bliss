import express from 'express';
import { submitContact, getContactMessages } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', submitContact);
router.get('/', getContactMessages);

export default router;


import { JsonDB } from '../services/db.js';
import { DEFAULT_BRAND_INFO } from '../data/seedData.js';

export const getBrandInfo = (req, res) => {
  try {
    const brand = JsonDB.read('brand', DEFAULT_BRAND_INFO);
    res.json({
      success: true,
      data: brand
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch brand info', error: error.message });
  }
};


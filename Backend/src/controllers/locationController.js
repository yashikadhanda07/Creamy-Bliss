import { JsonDB } from '../services/db.js';

export const getLocations = (req, res) => {
  try {
    const locations = JsonDB.getAll('locations');
    res.json({
      success: true,
      count: locations.length,
      data: locations
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch parlor locations', error: error.message });
  }
};

export const getLocationById = (req, res) => {
  try {
    const { id } = req.params;
    const location = JsonDB.findById('locations', id);

    if (!location) {
      return res.status(404).json({ success: false, message: 'Location not found' });
    }

    res.json({ success: true, data: location });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch location', error: error.message });
  }
};


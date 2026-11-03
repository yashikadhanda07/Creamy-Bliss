import { JsonDB } from '../services/db.js';
import {
  DEFAULT_CATEGORIES,
  DEFAULT_PRODUCTS,
  DEFAULT_COUPONS,
  DEFAULT_REVIEWS,
  DEFAULT_LOYALTY,
  DEFAULT_LOCATIONS,
  DEFAULT_ORDERS,
  DEFAULT_BRAND_INFO
} from './seedData.js';

export function seedDatabase(force = false) {
  console.log('🍧 Checking Creamy Bliss database...');

  if (force || JsonDB.read('categories').length === 0) {
    JsonDB.write('categories', DEFAULT_CATEGORIES);
    console.log('✓ Seeded categories');
  }

  if (force || JsonDB.read('products').length === 0) {
    JsonDB.write('products', DEFAULT_PRODUCTS);
    console.log('✓ Seeded products');
  }

  if (force || JsonDB.read('coupons').length === 0) {
    JsonDB.write('coupons', DEFAULT_COUPONS);
    console.log('✓ Seeded promo coupons');
  }

  if (force || JsonDB.read('reviews').length === 0) {
    JsonDB.write('reviews', DEFAULT_REVIEWS);
    console.log('✓ Seeded reviews');
  }

  const existingLoyalty = JsonDB.read('loyalty', null);
  if (force || !existingLoyalty || !existingLoyalty.memberId) {
    JsonDB.write('loyalty', DEFAULT_LOYALTY);
    console.log('✓ Seeded loyalty program profile');
  }

  if (force || JsonDB.read('locations').length === 0) {
    JsonDB.write('locations', DEFAULT_LOCATIONS);
    console.log('✓ Seeded parlor locations');
  }

  if (force || JsonDB.read('orders').length === 0) {
    JsonDB.write('orders', DEFAULT_ORDERS);
    console.log('✓ Seeded orders');
  }

  if (force || !JsonDB.read('brand', null)) {
    JsonDB.write('brand', DEFAULT_BRAND_INFO);
    console.log('✓ Seeded brand information');
  }

  if (force || JsonDB.read('subscribers').length === 0) {
    JsonDB.write('subscribers', [
      { id: 'sub-1', email: 'fan@sweetmail.com', joinedAt: new Date().toISOString() }
    ]);
  }

  if (force || JsonDB.read('contacts').length === 0) {
    JsonDB.write('contacts', []);
  }

  console.log('🍨 Creamy Bliss database is ready!');
}

// If run directly: `node src/data/seed.js`
if (process.argv[1] && process.argv[1].endsWith('seed.js')) {
  seedDatabase(true);
}


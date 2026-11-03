import { ALL_FLAVORS, BEST_SELLERS, CATEGORIES, TESTIMONIALS } from '../data/iceCreamData';

// Resolve API base URL dynamically for both local development and production deployments
const getApiBase = () => {
  const envUrl = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_BACKEND_URL;
  if (envUrl && envUrl.trim() !== '') {
    const trimmed = envUrl.trim().replace(/\/+$/, '');
    return trimmed.endsWith('/api') ? trimmed : `${trimmed}/api`;
  }
  return '/api';
};

const API_BASE = getApiBase();

/**
 * Fetch products with optional filtering and search
 */
export async function fetchProducts({ category, search, sort } = {}) {
  try {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    if (search) params.append('search', search);
    if (sort) params.append('sort', sort);

    const res = await fetch(`${API_BASE}/products?${params.toString()}`);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.warn('Backend unavailable, falling back to local dataset for products:', err.message);
    return ALL_FLAVORS;
  }
}

/**
 * Fetch top best sellers
 */
export async function fetchBestSellers() {
  try {
    const res = await fetch(`${API_BASE}/products/bestsellers`);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.warn('Backend unavailable, falling back to local best sellers:', err.message);
    return BEST_SELLERS;
  }
}

/**
 * Fetch flavor categories
 */
export async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE}/products/categories`);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    return data.data;
  } catch (err) {
    return CATEGORIES;
  }
}

/**
 * Validate a discount coupon code
 */
export async function validateCoupon(code, subtotal = 0) {
  try {
    const res = await fetch(`${API_BASE}/orders/validate-coupon`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, subtotal })
    });
    const data = await res.json();
    return data;
  } catch (err) {
    // Offline / fallback calculation
    if (code.trim().toUpperCase() === 'BLISSJOY') {
      return {
        success: true,
        valid: true,
        code: 'BLISSJOY',
        discountPercent: 20,
        discountAmount: (subtotal * 0.2)
      };
    }
    return { success: false, valid: false, message: 'Invalid promo code' };
  }
}

/**
 * Place a new order
 */
export async function submitOrder(orderPayload) {
  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload)
    });
    return await res.json();
  } catch (err) {
    // Graceful offline fallback
    const mockId = `CB-${Math.floor(10000 + Math.random() * 90000)}`;
    return {
      success: true,
      message: 'Order simulated offline',
      order: {
        id: mockId,
        ...orderPayload,
        status: 'Confirmed',
        earnedPoints: 50
      }
    };
  }
}

/**
 * Fetch customer reviews
 */
export async function fetchReviews() {
  try {
    const res = await fetch(`${API_BASE}/reviews`);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    return data.data;
  } catch (err) {
    return TESTIMONIALS;
  }
}

/**
 * Submit a customer review
 */
export async function submitReview(reviewPayload) {
  try {
    const res = await fetch(`${API_BASE}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewPayload)
    });
    return await res.json();
  } catch (err) {
    return { success: true, message: 'Review received!' };
  }
}

/**
 * Fetch loyalty program status
 */
export async function fetchLoyaltyProfile() {
  try {
    const res = await fetch(`${API_BASE}/loyalty`);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    return data.data;
  } catch (err) {
    return null;
  }
}

/**
 * Redeem loyalty reward
 */
export async function redeemReward(rewardId) {
  try {
    const res = await fetch(`${API_BASE}/loyalty/redeem`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rewardId })
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: 'Redemption failed' };
  }
}

/**
 * Submit contact inquiry
 */
export async function submitContact(contactPayload) {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactPayload)
    });
    return await res.json();
  } catch (err) {
    return { success: true, message: 'Note received' };
  }
}

/**
 * Subscribe newsletter
 */
export async function subscribeNewsletter(email) {
  try {
    const res = await fetch(`${API_BASE}/newsletter/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    return await res.json();
  } catch (err) {
    return { success: true, couponCode: 'SUMMER15' };
  }
}

/**
 * Fetch parlor locations
 */
export async function fetchLocations() {
  try {
    const res = await fetch(`${API_BASE}/locations`);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    return data.data;
  } catch (err) {
    return [];
  }
}


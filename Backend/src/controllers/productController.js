import { JsonDB } from '../services/db.js';
import crypto from 'crypto';

export const getProducts = (req, res) => {
  try {
    let products = JsonDB.getAll('products');
    const { category, search, featured, bestseller, sort } = req.query;

    if (category && category !== 'all') {
      products = products.filter(p => p.category?.toLowerCase() === category.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase().trim();
      products = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.badge && p.badge.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q))
      );
    }

    if (featured === 'true') {
      products = products.filter(p => p.isFeatured);
    }

    if (bestseller === 'true') {
      products = products.filter(p => p.isBestSeller);
    }

    if (sort) {
      if (sort === 'price-asc') {
        products.sort((a, b) => a.price - b.price);
      } else if (sort === 'price-desc') {
        products.sort((a, b) => b.price - a.price);
      } else if (sort === 'rating') {
        products.sort((a, b) => b.rating - a.rating);
      } else if (sort === 'name') {
        products.sort((a, b) => a.name.localeCompare(b.name));
      }
    }

    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch flavors', error: error.message });
  }
};

export const getBestSellers = (req, res) => {
  try {
    const products = JsonDB.getAll('products');
    const bestSellers = products.filter(p => p.isBestSeller);
    res.json({
      success: true,
      count: bestSellers.length,
      data: bestSellers
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch best sellers', error: error.message });
  }
};

export const getCategories = (req, res) => {
  try {
    const categories = JsonDB.getAll('categories');
    const products = JsonDB.getAll('products');

    const categoriesWithCount = categories.map(cat => {
      const count = cat.id === 'all'
        ? products.length
        : products.filter(p => p.category === cat.id).length;
      return { ...cat, count };
    });

    res.json({
      success: true,
      data: categoriesWithCount
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch categories', error: error.message });
  }
};

export const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    const product = JsonDB.findById('products', id);

    if (!product) {
      return res.status(404).json({ success: false, message: `Flavor '${id}' not found` });
    }

    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch flavor', error: error.message });
  }
};

export const createProduct = (req, res) => {
  try {
    const { name, price, category, description, imageUrl, unit = 'scoop', badge = 'New' } = req.body;

    if (!name || !price || !category) {
      return res.status(400).json({
        success: false,
        message: 'Name, price, and category are required'
      });
    }

    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `flavor-${Date.now()}`;

    const newProduct = {
      id,
      name,
      price: parseFloat(price),
      unit,
      rating: 5.0,
      reviewsCount: 1,
      badge,
      badgeBg: 'bg-primary-fixed text-on-primary-fixed',
      isBestSeller: Boolean(req.body.isBestSeller),
      isFeatured: Boolean(req.body.isFeatured),
      inStock: req.body.inStock !== false,
      inventory: req.body.inventory || 30,
      category,
      description: description || 'Artisanal handcrafted ice cream scoop.',
      imageUrl: imageUrl || 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
      createdAt: new Date().toISOString()
    };

    JsonDB.insert('products', newProduct);

    res.status(201).json({
      success: true,
      message: 'Flavor created successfully',
      data: newProduct
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create flavor', error: error.message });
  }
};

export const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    const existing = JsonDB.findById('products', id);

    if (!existing) {
      return res.status(404).json({ success: false, message: 'Flavor not found' });
    }

    const updated = JsonDB.updateById('products', id, req.body);
    res.json({
      success: true,
      message: 'Flavor updated successfully',
      data: updated
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update flavor', error: error.message });
  }
};

export const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    const deleted = JsonDB.deleteById('products', id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Flavor not found' });
    }

    res.json({ success: true, message: 'Flavor deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete flavor', error: error.message });
  }
};


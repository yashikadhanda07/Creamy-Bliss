import { JsonDB } from '../services/db.js';

export const getReviews = (req, res) => {
  try {
    const reviews = JsonDB.getAll('reviews');
    const { flavor, limit } = req.query;

    let filtered = [...reviews];
    if (flavor) {
      filtered = filtered.filter(r => r.flavor?.toLowerCase() === flavor.toLowerCase());
    }

    filtered.sort((a, b) => new Date(b.date || b.createdAt) - new Date(a.date || a.createdAt));

    if (limit) {
      filtered = filtered.slice(0, parseInt(limit, 10));
    }

    const totalRatings = reviews.reduce((sum, r) => sum + (r.rating || 5), 0);
    const averageRating = reviews.length > 0 ? parseFloat((totalRatings / reviews.length).toFixed(1)) : 5.0;

    const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(r => {
      const star = Math.min(5, Math.max(1, Math.round(r.rating || 5)));
      breakdown[star] = (breakdown[star] || 0) + 1;
    });

    res.json({
      success: true,
      stats: {
        totalReviews: reviews.length,
        averageRating,
        breakdown
      },
      data: filtered
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch reviews', error: error.message });
  }
};

export const submitReview = (req, res) => {
  try {
    const { name, rating, review, flavor, email } = req.body;

    if (!name || !review) {
      return res.status(400).json({
        success: false,
        message: 'Name and review text are required'
      });
    }

    const parsedRating = Math.min(5, Math.max(1, parseInt(rating, 10) || 5));
    const id = `rev-${Date.now()}`;

    // Generate initials if avatar not provided
    const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'CB';

    const newReview = {
      id,
      name,
      initials,
      rating: parsedRating,
      review,
      flavor: flavor || 'Artisanal Scoop',
      verified: true,
      createdAt: new Date().toISOString()
    };

    JsonDB.insert('reviews', newReview);

    // Reward loyalty points for writing a review
    const loyalty = JsonDB.read('loyalty', null);
    if (loyalty) {
      loyalty.points = (loyalty.points || 0) + 20;
      loyalty.pointsHistory = loyalty.pointsHistory || [];
      loyalty.pointsHistory.unshift({
        id: `pts-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        description: `Review Bonus (+20)`,
        points: `+20`
      });
      JsonDB.write('loyalty', loyalty);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for your sweet review! +20 Scoop points awarded.',
      data: newReview
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to submit review', error: error.message });
  }
};


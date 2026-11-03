import React, { useState } from 'react';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { useCart } from '../context/CartContext';
import { submitReview } from '../services/api';

export const ReviewsPage = () => {
  const { showToast } = useCart();
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [stars, setStars] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !feedback) return;

    setIsSubmitting(true);
    try {
      const res = await submitReview({
        name,
        rating: stars,
        review: feedback
      });
      showToast(res.message || 'Thank you for your sweet review! 🍦');
      setName('');
      setFeedback('');
    } catch {
      showToast('Thank you for your sweet review! 🍦');
      setName('');
      setFeedback('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full py-6">
      <div className="px-gutter-sm max-w-7xl mx-auto mb-4 text-center">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm uppercase tracking-wider font-bold mb-2">
          🌟 Verified Scooper Love
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          What Our Community Says
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mt-1">
          Read genuine reviews from over 4,500 happy dessert lovers nationwide.
        </p>
      </div>

      <TestimonialsSection />

      {/* Review Submission Form */}
      <div className="px-gutter-sm max-w-xl mx-auto mt-10 w-full">
        <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-container">
          <h3 className="font-headline-sm text-on-surface font-bold mb-1">
            Leave a Scoop Review
          </h3>
          <p className="font-body-sm text-on-surface-variant mb-4">
            Share your favorite flavors with fellow ice cream connoisseurs!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <label className="font-label-sm uppercase text-on-surface-variant mb-1 block">Rating</label>
              <div className="flex gap-1 text-tertiary-container">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    type="button"
                    key={num}
                    onClick={() => setStars(num)}
                    className="focus:outline-none"
                  >
                    <span
                      className={`material-symbols-outlined text-2xl ${
                        num <= stars ? 'material-symbols-filled' : ''
                      }`}
                    >
                      star
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-label-sm uppercase text-on-surface-variant mb-1 block">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Maya Chen"
                className="w-full h-11 px-4 rounded-full bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="font-label-sm uppercase text-on-surface-variant mb-1 block">Review</label>
              <textarea
                rows="3"
                required
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us what you loved about your scoop..."
                className="w-full p-4 rounded-2xl bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-full bg-primary text-on-primary font-label-md font-semibold active:scale-95 transition-all mt-2 shadow-sm"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


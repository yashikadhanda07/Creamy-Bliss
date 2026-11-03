import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/iceCreamData';
import { fetchReviews } from '../services/api';

export const TestimonialsSection = () => {
  const [reviews, setReviews] = useState(TESTIMONIALS);

  useEffect(() => {
    fetchReviews().then((data) => {
      if (data && data.length > 0) {
        setReviews(data);
      }
    });
  }, []);

  return (
    <section className="px-gutter-sm mt-space-xl max-w-7xl mx-auto" id="reviews">
      <div className="mb-space-md">
        <div className="flex items-center gap-1.5 text-tertiary">
          <span className="material-symbols-outlined text-[18px] material-symbols-filled">
            star
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
            4.9 / 5 from 4,500+ Happy Scoopers
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-0.5">
          Loved by Sweet Tooth Lovers
        </h2>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-space-sm">
        {reviews.map((t) => (
          <div
            key={t.id}
            className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-space-sm">
                  {t.avatar ? (
                    <img
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-primary-fixed"
                      src={t.avatar}
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-headline-sm text-headline-sm text-primary font-bold">
                      {t.initials}
                    </div>
                  )}

                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                      {t.name}
                    </h4>
                    {t.verified && (
                      <span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5 font-medium">
                        <span className="material-symbols-outlined text-[14px]">verified</span>{' '}
                        Verified Scooper
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex text-tertiary-container">
                  {[...Array(t.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[16px] material-symbols-filled"
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                {t.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


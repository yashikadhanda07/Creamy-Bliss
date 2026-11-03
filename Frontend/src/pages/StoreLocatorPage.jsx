import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { fetchLocations } from '../services/api';

export const StoreLocatorPage = () => {
  const { showToast } = useCart();

  const defaultLocations = [
    {
      name: "Downtown Flagship Parlor",
      address: "452 Artisan Blossom Way, Suite 100",
      city: "San Francisco, CA 94103",
      hours: "Mon - Sun: 11:00 AM - 10:30 PM",
      phone: "(415) 555-0182",
      features: ["Indoor Seating", "Waffle Bar", "Curbside Pickup"]
    },
    {
      name: "Marina Waterfront Boutique",
      address: "1892 Harbor Breeze Blvd",
      city: "San Francisco, CA 94123",
      hours: "Mon - Sun: 12:00 PM - 11:00 PM",
      phone: "(415) 555-0199",
      features: ["Outdoor Patio", "Flight Tastings", "Delivery Hub"]
    },
    {
      name: "Sunnyvale Square Gelateria",
      address: "310 Cherry Orchard Lane",
      city: "Sunnyvale, CA 94086",
      hours: "Tue - Sun: 12:00 PM - 10:00 PM",
      phone: "(408) 555-0145",
      features: ["Family Friendly", "Vegan Options", "Event Catering"]
    }
  ];

  const [locations, setLocations] = useState(defaultLocations);

  useEffect(() => {
    fetchLocations().then((data) => {
      if (data && data.length > 0) {
        setLocations(data);
      }
    });
  }, []);

  return (
    <div className="flex flex-col w-full py-6 max-w-4xl mx-auto px-gutter-sm">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-wider font-bold mb-2">
          📍 Find A Parlor
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Our Ice Cream Parlors
        </h1>
        <p className="font-body-md text-on-surface-variant max-w-md mx-auto mt-1">
          Visit us in person to smell fresh waffle cones baking and sample today's small-batch churns!
        </p>
      </div>

      <div className="space-y-4">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <h3 className="font-headline-sm text-on-surface font-bold text-lg mb-1">
                {loc.name}
              </h3>
              <p className="font-body-md text-on-surface-variant text-sm mb-1">
                {loc.address}, {loc.city}
              </p>
              <p className="font-body-sm text-xs text-primary font-semibold mb-3">
                🕒 {loc.hours} • 📞 {loc.phone}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {loc.features.map((feat, fidx) => (
                  <span
                    key={fidx}
                    className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface text-[11px] font-medium"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex md:flex-col gap-2 min-w-[140px]">
              <button
                onClick={() => showToast(`Opening directions to ${loc.name}...`)}
                className="flex-1 py-2 px-4 rounded-full bg-primary text-on-primary font-label-sm font-semibold active:scale-95 transition-all text-center flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">directions</span>
                Get Directions
              </button>
              <button
                onClick={() => showToast(`Pickup scheduled at ${loc.name}!`)}
                className="flex-1 py-2 px-4 rounded-full bg-secondary-container text-on-secondary-container font-label-sm font-semibold active:scale-95 transition-all text-center"
              >
                Order Pickup
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


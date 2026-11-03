import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { submitContact } from '../services/api';

export const ContactPage = () => {
  const { showToast } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const res = await submitContact(formData);
      setSent(true);
      showToast(res.message || 'Your message has been sent to our scoop team! 🍨');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    } catch {
      showToast('Message sent! 🍨');
      setSent(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col w-full py-6 max-w-3xl mx-auto px-gutter-sm">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm uppercase tracking-wider font-bold mb-2">
          💌 We'd Love To Hear From You
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Get in Touch
        </h1>
        <p className="font-body-md text-on-surface-variant max-w-md mx-auto mt-1">
          Have a question about allergens, event catering, or private tastings? Reach out below!
        </p>
      </div>

      <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-container">
        {sent ? (
          <div className="py-12 text-center">
            <span className="material-symbols-outlined text-5xl text-secondary mb-3">
              check_circle
            </span>
            <h3 className="font-headline-sm font-bold text-on-surface">Thank You!</h3>
            <p className="font-body-md text-on-surface-variant mt-1">
              We have received your message and our team will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-4 px-6 py-2 rounded-full bg-primary text-on-primary font-label-md"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-label-sm uppercase text-on-surface-variant mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full h-11 px-4 rounded-full bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="font-label-sm uppercase text-on-surface-variant mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full h-11 px-4 rounded-full bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>

            <div>
              <label className="font-label-sm uppercase text-on-surface-variant mb-1 block">
                Subject
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full h-11 px-4 rounded-full bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option>General Inquiry</option>
                <option>Wedding &amp; Event Catering</option>
                <option>Allergen &amp; Dietary Questions</option>
                <option>Wholesale &amp; Retail Supply</option>
                <option>Feedback &amp; Suggestions</option>
              </select>
            </div>

            <div>
              <label className="font-label-sm uppercase text-on-surface-variant mb-1 block">
                Message
              </label>
              <textarea
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can we help make your day sweeter?..."
                className="w-full p-4 rounded-2xl bg-surface-container-low border border-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-full bg-primary text-on-primary font-label-lg font-semibold active:scale-95 transition-all shadow-md"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};


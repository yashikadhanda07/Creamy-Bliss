import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { BRAND_INFO } from '../data/iceCreamData';
import { fetchLoyaltyProfile, redeemReward } from '../services/api';

export const LoyaltyClubPage = () => {
  const { showToast } = useCart();
  const [points, setPoints] = useState(240);
  const [member, setMember] = useState(null);

  const defaultRewards = [
    { id: 1, cost: 50, title: "Free Artisan Topping", desc: "Handcrafted fudge drizzle, organic sprinkles, or cacao nibs." },
    { id: 2, cost: 100, title: "Fresh Waffle Bowl Upgrade", desc: "Upgrade any single or double scoop to a warm waffle bowl." },
    { id: 3, cost: 200, title: "$5 Off Any Online Order", desc: "Instant $5 coupon applied directly at checkout." },
    { id: 4, cost: 300, title: "Complimentary Artisanal Pint", desc: "One full pint of your favorite seasonal flavor." }
  ];

  const [rewards, setRewards] = useState(defaultRewards);

  useEffect(() => {
    fetchLoyaltyProfile().then((data) => {
      if (data) {
        setPoints(data.points ?? 240);
        setMember(data);
        if (data.rewardsCatalog && data.rewardsCatalog.length > 0) {
          setRewards(data.rewardsCatalog);
        }
      }
    });
  }, []);

  const handleRedeem = async (reward) => {
    if (points >= reward.cost) {
      try {
        const res = await redeemReward(reward.id);
        if (res.success) {
          setPoints(res.remainingPoints);
          showToast(`Redeemed ${reward.title}! Voucher: ${res.voucherCode} 🎉`);
        } else {
          showToast(res.message || 'Redemption error');
        }
      } catch {
        setPoints(prev => prev - reward.cost);
        showToast(`Redeemed ${reward.title}! Check your coupon box.`);
      }
    } else {
      showToast(`Need ${reward.cost - points} more points to redeem this!`);
    }
  };

  return (
    <div className="flex flex-col w-full py-6 max-w-4xl mx-auto px-gutter-sm">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm uppercase tracking-wider font-bold mb-2">
          🍦 Bliss Loyalty Club
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Scoop Points &amp; Perks
        </h1>
        <p className="font-body-md text-on-surface-variant max-w-md mx-auto mt-1">
          Earn 10 points for every scoop purchased and unlock sweet artisan rewards!
        </p>
      </div>

      {/* Member Card */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary via-primary-container to-tertiary-container p-6 text-on-primary shadow-lg mb-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              alt="Sweet Member"
              className="w-16 h-16 rounded-full object-cover ring-4 ring-white/30 shadow-md"
              src={BRAND_INFO.userAvatarUrl}
            />
            <div>
              <span className="text-xs uppercase tracking-widest text-primary-fixed font-bold">
                Gold Tier Member
              </span>
              <h2 className="font-headline-md text-2xl font-bold">Sweet Member</h2>
              <p className="text-sm text-surface-bright/80">Member since March 2024</p>
            </div>
          </div>

          <div className="bg-surface-bright/20 backdrop-blur-md rounded-xl p-4 text-center md:min-w-[160px]">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary-fixed block">
              Balance
            </span>
            <span className="text-3xl font-extrabold font-headline-md">{points}</span>
            <span className="text-xs block text-primary-fixed">Scoop Points</span>
          </div>
        </div>

        {/* Progress bar to next tier */}
        <div className="relative z-10 mt-6 pt-4 border-t border-white/20">
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span>Next Reward: Free Pint (300 pts)</span>
            <span>{Math.min(100, Math.round((points / 300) * 100))}%</span>
          </div>
          <div className="w-full h-2.5 bg-black/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary-container transition-all duration-500 rounded-full"
              style={{ width: `${Math.min(100, (points / 300) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Available Rewards */}
      <div>
        <h3 className="font-headline-sm text-on-surface font-bold mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">redeem</span>
          Available Rewards to Redeem
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="p-5 rounded-lg bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-title-md font-bold text-on-surface">{reward.title}</h4>
                  <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold">
                    {reward.cost} pts
                  </span>
                </div>
                <p className="font-body-sm text-on-surface-variant text-sm">{reward.desc}</p>
              </div>

              <button
                disabled={points < reward.cost}
                onClick={() => handleRedeem(reward)}
                className={`mt-4 py-2 px-4 rounded-full font-label-md font-semibold transition-all ${
                  points >= reward.cost
                    ? 'bg-primary text-on-primary hover:brightness-105 active:scale-95'
                    : 'bg-surface-container text-outline cursor-not-allowed'
                }`}
              >
                {points >= reward.cost ? 'Redeem Reward' : `Need ${reward.cost - points} more pts`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


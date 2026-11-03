import { JsonDB } from '../services/db.js';

export const getLoyaltyProfile = (req, res) => {
  try {
    const loyalty = JsonDB.read('loyalty', null);

    if (!loyalty) {
      return res.status(404).json({ success: false, message: 'Loyalty profile not found' });
    }

    res.json({
      success: true,
      data: loyalty
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch loyalty profile', error: error.message });
  }
};

export const redeemReward = (req, res) => {
  try {
    const { rewardId } = req.body;

    if (!rewardId) {
      return res.status(400).json({ success: false, message: 'Reward ID is required' });
    }

    const loyalty = JsonDB.read('loyalty', null);
    if (!loyalty) {
      return res.status(404).json({ success: false, message: 'Loyalty profile not found' });
    }

    const reward = (loyalty.rewardsCatalog || []).find(r => r.id === parseInt(rewardId, 10));
    if (!reward) {
      return res.status(404).json({ success: false, message: 'Reward not found in catalog' });
    }

    if (loyalty.points < reward.cost) {
      const needed = reward.cost - loyalty.points;
      return res.status(400).json({
        success: false,
        message: `Insufficient points! You need ${needed} more points to redeem '${reward.title}'.`
      });
    }

    // Deduct points
    loyalty.points -= reward.cost;

    const voucherCode = `CB-${reward.code || 'PERK'}-${Math.floor(1000 + Math.random() * 9000)}`;

    const redemptionRecord = {
      id: `red-${Date.now()}`,
      rewardId: reward.id,
      title: reward.title,
      cost: reward.cost,
      voucherCode,
      redeemedAt: new Date().toISOString()
    };

    loyalty.redeemedRewards = loyalty.redeemedRewards || [];
    loyalty.redeemedRewards.unshift(redemptionRecord);

    loyalty.pointsHistory = loyalty.pointsHistory || [];
    loyalty.pointsHistory.unshift({
      id: `pts-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      description: `Redeemed: ${reward.title}`,
      points: `-${reward.cost}`
    });

    JsonDB.write('loyalty', loyalty);

    res.json({
      success: true,
      message: `Redeemed ${reward.title} successfully!`,
      voucherCode,
      remainingPoints: loyalty.points,
      redemption: redemptionRecord
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to redeem reward', error: error.message });
  }
};


const Donation = require('../models/Donation');

exports.createDonation = async (req, res) => {
  const donation = await Donation.create({ userId: req.userId, amount: req.body.amount });
  res.json(donation);
};

exports.getUserDonations = async (req, res) => {
  const donations = await Donation.find({ userId: req.userId });
  res.json(donations);
};

exports.getTotalRaised = async (req, res) => {
  const result = await Donation.aggregate([
    { $match: { userId: req.userId } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);
  res.json({ total: result[0]?.total || 0 });
};

const rewards = require("../models/rewards");

exports.getBalance = (req, res) => {
  const { wallet } = req.body;

  if (!rewards[wallet]) {
    return res.json({ pending: 0, total: 0 });
  }

  res.json(rewards[wallet]);
};

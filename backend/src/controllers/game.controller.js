const rewards = require("../models/rewards");

exports.submitScore = (req, res) => {
  const { wallet, score } = req.body;

  if (!wallet || !score) {
    return res.status(400).json({ error: "Missing data" });
  }

  if (score > 1000000) {
    return res.status(403).json({ error: "Cheating detected" });
  }

  const drc = score / 100000;

  if (!rewards[wallet]) {
    rewards[wallet] = { pending: 0, total: 0 };
  }

  rewards[wallet].pending += drc;
  rewards[wallet].total += drc;

  res.json({
    message: "Score processed",
    drcEarned: drc,
    pendingBalance: rewards[wallet].pending
  });
};
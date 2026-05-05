const rewards = require("../models/rewards");

// minimum withdrawal rule
const MIN_WITHDRAW = 10000;

exports.withdraw = (wallet) => {
  if (!rewards[wallet]) return null;

  const amount = rewards[wallet].pending;

  if (amount < MIN_WITHDRAW) {
    return { error: "Minimum 10,000 DRC required" };
  }

  // reset pending
  rewards[wallet].pending = 0;

  return {
    success: true,
    amount
  };
};
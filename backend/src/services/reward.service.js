// 100,000 score = 1 DRC
const SCORE_PER_DRC = 100000;

exports.calculateDRC = (score) => {
  return (score / SCORE_PER_DRC).toFixed(4);
};
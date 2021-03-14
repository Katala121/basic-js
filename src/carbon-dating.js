const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!arguments) return false
  else if (typeof sampleActivity != typeof 'string') return false
  else if (!Number(sampleActivity)) return false
  else if (Number(sampleActivity) > MODERN_ACTIVITY ||  Number(sampleActivity) <= 0) return false
  return Math.floor(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD) + 1)
};

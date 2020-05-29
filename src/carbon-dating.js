const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const RATE = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
    if (!sampleActivity || sampleActivity.toString() !== sampleActivity) {
        return false;
    }
    const activity = parseFloat(sampleActivity);
    if (isNaN(activity) || activity <= 0 || activity >= MODERN_ACTIVITY) {
        return false;
    }
    return Math.ceil(Math.log(MODERN_ACTIVITY / Number(activity)) / RATE);
};

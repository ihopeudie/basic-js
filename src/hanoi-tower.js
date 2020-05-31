const SECONDS_IN_HOUR = 3600;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = Math.pow(2, disksNumber) - 1;
    return {
        turns: turns,
        seconds: Math.floor(turns / (turnsSpeed / SECONDS_IN_HOUR))
    };
};

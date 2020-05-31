const CANT_GET_SEASON_MESSAGE = "Unable to determine the time of year!";
const SUMMER = "summer";
const WINTER = "winter";
const AUTUMN = "autumn";
const SPRING = "spring";

function isValidDate(date) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}

module.exports = function getSeason(date) {
    if (!date) {
        return CANT_GET_SEASON_MESSAGE;
    }
    if (!(date instanceof Date) || !isValidDate(date)) {
        throw new Error(CANT_GET_SEASON_MESSAGE);
    }
    const month = date.getMonth() + 1;

    if (month < 3 || month === 12) {
        return WINTER;
    }
    if (month < 6) {
        return SPRING;
    }
    if (month < 9) {
        return SUMMER;
    }
    return AUTUMN;
};

module.exports = function repeater(str, options) {
    let string = str != null ? str.toString() : "null";
    options.addition = typeof options.addition === 'undefined' ? null :
        options.addition !== null ? options.addition.toString() : "null";
    options.repeatTimes = options.repeatTimes || 1;
    options.additionRepeatTimes = options.additionRepeatTimes || 1;
    options.separator = options.separator || "+";
    options.additionSeparator = options.additionSeparator || "|";

    const resultArray = new Array(options.repeatTimes);
    if (options.addition && !options.noAddition) {
        string = string += repeater(options.addition,
            {
                repeatTimes: options.additionRepeatTimes,
                noAddition: true,
                separator: options.additionSeparator
            });
    }
    resultArray.fill(string);
    return resultArray.join(options.separator);
};

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr.every(e => !Array.isArray(e))) {
            return 1;
        }
        return 1 + this.calculateDepth(arr.flatMap(x => x));
    }
};

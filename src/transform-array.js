const DISCARD_NEXT = "--discard-next";
const DISCARD_PREV = "--discard-prev";
const DOUBLE_NEXT = "--double-next";
const DOUBLE_PREV = "--double-prev";
const COMMANDS = [DISCARD_PREV, DISCARD_NEXT, DOUBLE_PREV, DOUBLE_NEXT];

function inRange(arr, i) {
    return (i >= 0 && i <= arr.length - 1);
}

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Invalid arguments");
    }
    const result = [...arr];
    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        switch (element) {
            case DISCARD_NEXT: {
                if (inRange(arr, (i + 1))) {
                    result[i + 1] = "markThisToRemove";
                }
                break;
            }
            case DISCARD_PREV: {
                if (inRange(arr, (i - 1))) {
                    result[i - 1] = "markThisToRemove";
                }
                break;
            }
            case DOUBLE_NEXT: {
                if (inRange(arr, (i + 1))) {
                    result[i] = result[i + 1];
                }
                break;
            }
            case DOUBLE_PREV: {
                if (inRange(arr, (i - 1))) {
                    result[i] = result[i - 1];
                }
            }
        }
    }
    return result.filter(e => (e !== "markThisToRemove") && COMMANDS.indexOf(e) === -1);
};

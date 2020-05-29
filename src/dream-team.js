module.exports = function createDreamTeam(members) {
    if (!members || !Array.isArray(members)) {
        return false;
    }
    return members.filter(e => typeof e === 'string')
        .map(e => e.replace(/\s+/, "").toUpperCase())
        .sort()
        .map(e => e.substring(0, 1))
        .join("");
};

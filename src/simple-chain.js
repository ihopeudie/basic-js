const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (this.chain) {
            this.chain.push(value);
        } else {
            this.chain = [value];
        }
        return this;
    },
    removeLink(position) {
        if (position < 1 || position < this.getLength()) {
            this.chain.splice(position - 1, 1);
        } else {
            this.chain = [];
            throw new Error();
        }
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        const value = this.chain.map(e => e === null ? '( null )' : `( ${e.toString()} )`).join("~~");
        this.chain = [];
        return value;
    }
};
module.exports = chainMaker;

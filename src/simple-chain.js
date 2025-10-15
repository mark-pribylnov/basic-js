const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  values: [],

  getLength() {
    return this.values.length;
  },
  addLink(value = "") {
    this.values.push(`( ${value} )`);
    // console.log(this.values);
    return this;
  },

  removeLink(position) {
    if (position < 0 || position >= this.values.length) {
      this.values = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.values.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.values.reverse();
    return this;
  },

  finishChain() {
    const chain = this.values.join("~~");
    this.values.length = 0;
    return chain;
  },
};

module.exports = {
  chainMaker,
};

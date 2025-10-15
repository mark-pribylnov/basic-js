const { NotImplementedError } = require("../lib");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const positions = [];
  const sort = [];
  const final = [];

  arr.forEach((el, i) => {
    if (el === -1) {
      positions.push(i);
    } else {
      sort.push(el);
    }
  });

  sort.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (positions.includes(i)) {
      final.push(-1);
    } else {
      const taken = sort.shift();
      final.push(taken);
    }
  }

  return final;
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

module.exports = {
  sortByHeight,
};

const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  function getMinDigit(n) {
    return n
      .toString()
      .split("")
      .sort((a, b) => +a - +b)[0];
  }
  function getIndex(where, what) {
    return where.toString().indexOf(what);
  }

  let minValue = getMinDigit(n);

  if (getIndex(n, minValue) === n.toString().length - 1 && +n.toString().at(-1) !== 0) {
    minValue = getMinDigit(+n.toString().slice(0, n.toString().length - 1));
  }

  const index = getIndex(n, minValue);

  return Number(n.toString().slice(0, index) + n.toString().slice(index + 1));
}

// console.log(deleteDigit(152));
// console.log(deleteDigit(1001));
// console.log(deleteDigit(10));
// console.log(deleteDigit(222219));
// console.log(deleteDigit(109));
// console.log(deleteDigit(342));

module.exports = {
  deleteDigit,
};

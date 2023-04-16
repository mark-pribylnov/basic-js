const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (
    !arr.includes("--discard-prev") &&
    !arr.includes("--discard-next") &&
    !arr.includes("--double-prev") &&
    !arr.includes("--double-next")
  ) {
    return arr;
  }

  const input = [];

  for (let el of arr) {
    input.push(el);
  }

  const output = [];

  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] === "number") {
      output.push(input[i]);
    }

    if (input[i] === "--discard-prev") {
      if (typeof input[i - 1] === "number") {
        output.pop();
        // output.push(input[i - 1]);
      }
    } else if (input[i] === "--double-prev") {
      if (typeof input[i - 1] === "number") {
        output.push(input[i - 1]);
      }
    } else if (input[i] === "--discard-next") {
      input.splice([i + 1], 1);
    } else if (input[i] === "--double-next") {
      input.splice(i + 1, 0, input[i + 1]);
    }
  }

  // console.log("Output", output);
  return output;
}

module.exports = {
  transform,
};

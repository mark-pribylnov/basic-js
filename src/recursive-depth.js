const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    if (!arr.some(el => Array.isArray(el))) {
      return 1;
    }

    const depths = [];
    // let lastChecked = null;

    function goDeeper(arr, depth = 0) {
      // const currentArray = arr;
      // Base case
      if (arr.length === 0 || !arr.some(el => Array.isArray(el))) return depth + 1;
      // Continues case: recursion if array contains only an array
      if (arr.length === 1 && Array.isArray(arr[0])) return goDeeper(arr[0], depth + 1);

      // go find an array
      for (const el of arr) {
        // lastChecked = el;
        if (Array.isArray(el)) {
          const currentDepth = goDeeper(el, depth + 1);
          depths.push(currentDepth);
        }
      }

      return depth + 1;
    }

    goDeeper(arr);
    return depths.sort((a, b) => b - a)[0];
  }
}
// const obj = new DepthCalculator();

// function calculateDepth(arr, depth = 0) {
//   const depths = [];
//   let lastChecked = null;

//   function goDeeper(arr, depth = 0) {
//     const currentArray = arr;
//     // Base case
//     if (arr.length === 0 || !arr.some(el => Array.isArray(el))) return depth + 1;
//     // Continues case: recursion if array contains only an array
//     if (arr.length === 1 && Array.isArray(arr[0])) return goDeeper(arr[0], depth + 1);

//     // go find an array
//     for (const el of arr) {
//       lastChecked = el;
//       if (Array.isArray(el)) {
//         const currentDepth = goDeeper(el, depth + 1);
//         depths.push(currentDepth);
//       }
//     }

//     return depth + 1;
//   }

//   goDeeper(arr);
//   return depths.sort((a, b) => b - a)[0];
// }
// console.log(calculateDepth([[[]]]));
// console.log(calculateDepth([1, [[[[[[101, 123, [5543]]]]], 10], 4, [1], 5], 6, 7, [9, 10]]));
// console.log(
//   calculateDepth([
//     1,
//     [8, [[]]],
//     [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]],
//     2,
//     3,
//     [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
//     [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
//     4,
//     5,
//     ["6575", ["adas", ["dfg", [0]]]],
//   ])
// );
// console.log(depths);
// console.log(obj.calculateDepth([1, 2, 3, [4, 5]]));

// depthCalculator.calculateDepth([1, 2]);
// function calculateDepth(arr, depth) {
//
// }

module.exports = {
  depthCalculator: new DepthCalculator(),
};

// function calculateDepth(arr, depth = 0) {
//   const currentArray = arr;
//   // Base case
//   if (arr.length === 0 || !arr.some(el => Array.isArray(el))) return depth + 1;
//   // Continues case: recursion if array contains only an array
//   if (arr.length === 1 && Array.isArray(arr[0])) return calculateDepth(arr[0], depth + 1);

//   // go find an array
//   for (const el of arr) {
//     lastChecked = el;
//     if (Array.isArray(el)) {
//       const currentDepth = calculateDepth(el, depth + 1);
//       depths.push(currentDepth);
//     }
//   }

//   return depth + 1;
// }

const { NotImplementedError } = require("../lib");

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
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  const copy = [];
  // let missingIndex = null;
  let nextMissin = false;

  for (let i = 0; i < arr.length; i++) {
    if (nextMissin) {
      nextMissin = false;
      continue;
    }

    // const currentI = arr[i];

    switch (arr[i]) {
      case "--discard-next":
        nextMissin = true;
        // missingIndex = i + 1;
        // i += 2;
        break;

      case "--discard-prev":
        if (arr[i - 2] !== "--discard-next") copy.pop();
        // i++;
        break;

      case "--double-next":
        if (typeof arr[i + 1] !== "string" && i + 1 < arr.length) {
          copy.push(arr[i + 1]);
          // copy.push(arr[i + 1]);
        }
        // i += 2;
        break;

      case "--double-prev":
        if (arr[i - 2] !== "--discard-next" && i >= 1) copy.push(arr[i - 1]);
        // if (typeof arr[i - 1] !== "string" && missingIndex !== i - 1) copy.push(arr[i - 1]);
        // if (arr[i - 2] === "--discard-next") copy.pop();
        // if (typeof arr[i] !== "string") copy.push(arr[i]);
        // i++;
        break;

      default:
        // if (typeof arr[i] !== "string") copy.push(arr[i]);
        copy.push(arr[i]);
        // i++;
        break;
    }
  }

  return copy;
}

console.log(transform([1, 2, 3, "--double-next", 4, 5])); // 1,2,3,4,4,5
console.log(transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5])); // 1,2,3,4,5
console.log(transform([1, 2, 3, "--double-next", 1337, "--double-prev", 4, 5])); // 1,2,3, 1337,1337,1337,4,5
console.log(transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5])); // 1,2,3,4,5
console.log(transform([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5])); // 1,2,3,1337,4,5

module.exports = {
  transform,
};

// function transform(arr) {
//   if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

//   const copy = [];
//   let missingIndex = null;

//   for (let i = 0; i < arr.length; i++) {
//     const currentI = arr[i];
//     switch (arr[i]) {
//       case "--discard-next":
//         missingIndex = i + 1;
//         i += 2;
//         break;

//       case "--discard-prev":
//         if (missingIndex !== i - 1) copy.splice(i - 1, 1);
//         i++;
//         break;

//       case "--double-next":
//         if (typeof arr[i + 1] !== "string") {
//           copy.push(arr[i + 1]);
//           copy.push(arr[i + 1]);
//         }
//         i += 2;
//         break;

//       case "--double-prev":
//         if (typeof arr[i - 1] !== "string" && missingIndex !== i - 1) copy.push(arr[i - 1]);
//         // if (arr[i - 2] === "--discard-next") copy.pop();
//         if (typeof arr[i] !== "string") copy.push(arr[i]);
//         i++;
//         break;

//       default:
//         if (typeof arr[i] !== "string") copy.push(arr[i]);
//         i++;
//         break;
//     }
//   }

//   return copy;
// }

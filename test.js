"use strict";

// Discard prev
// 1. Add elements to a new array until you face the condition
// 2. delete element at the position before the condition

function transform(arr) {
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

// console.log(![1, 2, 3].includes(2));

// transform([1, 2, 3, 4, 5, 6]);
// transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5]);
// output: [1, 2, 3, 4, 5]
// transform([1, 2, 3, "--double-next", 1337, "--double-prev", 4, 5]);
// output: [1, 2, 3, 1337, 1337, 1337, 4, 5]
// transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5]);
// output: [1, 2, 3, 4, 5]
// transform([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5]);
// output: [1, 2, 3, 1337, 4, 5]

// transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5]); // => [1, 2, 4, 5]
// transform([1, 2, 3, 1337, "--double-prev", 4, 5]); // => [1, 2, 4, 5]
// transform([1, 2, 3, "--discard-next", 4, 5]); // => [1, 2, 4, 5]
// transform([1, 2, 3, "--double-next", 4, 5]); //=> [1, 2, 3, 4, 4, 5]
// transform([1, 2, 3, "--double-prev", 4, 5]); // => [1, 2, 4, 5]

// console.log("        jjjhjhjh");

"use strict";

// 1. get the sum of the first line

const matrixSum = matrix => {
  let sum = 0;

  sum += matrix[0].reduce((sum, current) => sum + current, 0);

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i - 1][j] !== 0) {
        sum += matrix[i][j];
      }
    }
  }
  console.log(sum);
  return sum;
};

matrixSum([
  [0, 1],
  [0, 5],
]);

// matrixSum([
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ]);

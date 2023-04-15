"use strict";

const countCats = arr => {
  let catCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j]);
      if (arr[i][j] === "^^") {
        catCounter++;
      }
    }
  }
  console.log(catCounter);
  return catCounter;
};

countCats([
  [0, 1, "^^"],
  [0, "^^", 2],
  ["^^", 1, 2],
]);

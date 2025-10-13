const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(0));

  function getNeighbors(yIndex, xIndex, field) {
    const neighbors = {};
    const maxNeighbors = 8;

    const rowLength = field[0].length;
    const columnLength = field.length;

    const xIndexMAX = rowLength - 1;
    const yIndexMAX = columnLength - 1;

    for (let i = 1; i <= maxNeighbors; i++) {
      switch (i) {
        case 1:
          if (yIndex >= 1 && xIndex < xIndexMAX) {
            const bro = field[yIndex - 1][xIndex + 1];
            neighbors[`n${i}`] = bro;
          }
          break;
        case 2:
          if (xIndex < xIndexMAX) {
            const bro = field[yIndex][xIndex + 1];
            neighbors[`n${i}`] = bro;
          }
          break;
        case 3:
          if (yIndex < yIndexMAX && xIndex < xIndexMAX) {
            const bro = field[yIndex + 1][xIndex + 1];
            neighbors[`n${i}`] = bro;
          }
          break;
        case 4:
          if (yIndex < yIndexMAX) {
            const bro = field[yIndex + 1][xIndex];
            neighbors[`n${i}`] = bro;
          }
          break;
        case 5:
          if (xIndex >= 1 && yIndex < yIndexMAX) {
            const bro = field[yIndex + 1][xIndex - 1];
            neighbors[`n${i}`] = bro;
          }
          break;
        case 6:
          if (xIndex >= 1) {
            const bro = field[yIndex][xIndex - 1];
            neighbors[`n${i}`] = bro;
          }
          break;
        case 7:
          if (xIndex >= 1 && yIndex >= 1) {
            const bro = field[yIndex - 1][xIndex - 1];
            neighbors[`n${i}`] = bro;
          }
          break;
        case 8:
          if (yIndex >= 1) {
            const bro = field[yIndex - 1][xIndex];
            neighbors[`n${i}`] = bro;
          }
          break;
        default:
          break;
      }
    }

    return neighbors;
  }

  for (let y = 0; y <= matrix.length - 1; y += 1) {
    const row = matrix[y];
    const newRow = newMatrix[y];
    for (let x = 0; x <= row.length - 1; x += 1) {
      const neighbors = getNeighbors(y, x, matrix);

      const minesAround = Object.values(neighbors).reduce((acc, el) => {
        if (el === true) return (acc += 1);
        return acc;
      }, 0);

      newRow[x] = minesAround;
    }
  }
  return newMatrix;
}

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);

module.exports = {
  minesweeper,
};

//  function getNeighbors(mtrx) {
//    for (const row of mtrx) {
//      for (const cell of row) {
//        cell.neighbors = [];
//        // cell.TESTcornerNeighbors = [];
//        // cell.TESTdirectNeighbors = [];
//        const { yIndex } = cell;
//        const { xIndex } = cell;
//        for (let i = 1; i <= 8; i++) {
//          switch (i) {
//            case 1:
//              if (yIndex >= 1 && xIndex <= 8) {
//                const neighbor = matrix[yIndex - 1][xIndex + 1];
//                cell.neighbors.push(neighbor);
//                // cell.TESTcornerNeighbors.push(neighbor);
//              }
//              break;
//            case 2:
//              if (xIndex <= 8) {
//                const neighbor = matrix[yIndex][xIndex + 1];
//                cell.neighbors.push(neighbor);
//                // cell.TESTdirectNeighbors.push(neighbor);
//              }
//              break;
//            case 3:
//              if (yIndex <= 8 && xIndex <= 8) {
//                const neighbor = matrix[yIndex + 1][xIndex + 1];
//                cell.neighbors.push(neighbor);
//                // cell.TESTcornerNeighbors.push(neighbor);
//              }
//              break;
//            case 4:
//              if (yIndex <= 8) {
//                const neighbor = matrix[yIndex + 1][xIndex];
//                cell.neighbors.push(neighbor);
//                // cell.TESTdirectNeighbors.push(neighbor);
//              }
//              break;
//            case 5:
//              if (xIndex >= 1 && yIndex <= 8) {
//                const neighbor = matrix[yIndex + 1][xIndex - 1];
//                cell.neighbors.push(neighbor);
//                // cell.TESTcornerNeighbors.push(neighbor);
//              }
//              break;
//            case 6:
//              if (xIndex >= 1) {
//                const neighbor = matrix[yIndex][xIndex - 1];
//                cell.neighbors.push(neighbor);
//                // cell.TESTdirectNeighbors.push(neighbor);
//              }
//              break;
//            case 7:
//              if (xIndex >= 1 && yIndex >= 1) {
//                const neighbor = matrix[yIndex - 1][xIndex - 1];
//                cell.neighbors.push(neighbor);
//                // cell.TESTcornerNeighbors.push(neighbor);
//              }
//              break;
//            case 8:
//              if (yIndex >= 1) {
//                const neighbor = matrix[yIndex - 1][xIndex];
//                cell.neighbors.push(neighbor);
//                // cell.TESTdirectNeighbors.push(neighbor);
//              }
//              break;
//            default:
//              break;
//          }
//        }
//      }
//    }
//  }

// const neighbors = {
//   n1: field[cellPosY - 1][cellPosX],
//   n2: field[cellPosY - 1][cellPosX + 1],
//   n3: field[cellPosY][cellPosX + 1],
//   n4: field[cellPosY + 1][cellPosX + 1],
//   n5: field[cellPosY + 1][cellPosX],
//   n6: field[cellPosY + 1][cellPosX - 1],
//   n7: field[cellPosY][cellPosX - 1],
//   n8: field[cellPosY - 1][cellPosX] - 1,
// };
// const neighbors = {
//   n1: null,
//   n2: null,
//   n3: null,
//   n4: null,
//   n5: null,
//   n6: null,
//   n7: null,
//   n8: null,
// };

// switch (true) {
//   case field[cellPosY - 1][cellPosX]:
//     neighbors.n1 = field[cellPosY - 1][cellPosX];
//     break;
//   case field[cellPosY - 1][cellPosX + 1]:
//     neighbors.n2 = field[cellPosY - 1][cellPosX + 1];
//     break;
//   case field[cellPosY][cellPosX + 1]:
//     neighbors.n3 = field[cellPosY][cellPosX + 1];
//     break;
//   case field[cellPosY + 1][cellPosX + 1]:
//     neighbors.n4 = field[cellPosY + 1][cellPosX + 1];
//     break;
//   case field[cellPosY + 1][cellPosX]:
//     neighbors.n5 = field[cellPosY + 1][cellPosX];
//     break;
//   case field[cellPosY + 1][cellPosX - 1]:
//     neighbors.n6 = field[cellPosY + 1][cellPosX - 1];
//     break;
//   case field[cellPosY][cellPosX - 1]:
//     neighbors.n7 = field[cellPosY][cellPosX - 1];
//     break;
//   case field[cellPosY - 1][cellPosX] - 1:
//     neighbors.n8 = field[cellPosY - 1][cellPosX] - 1;
//     break;
//   default:
//     break;
// }

// function getNeighbors(yIndex, xIndex, field) {
//   const neighbors = [];
//   const jail = {};
//   const maxNeighbors = 8;

//   const rowLength = field[0].length;
//   const columnLength = field.length;

//   const xIndexMAX = rowLength - 1;
//   const yIndexMAX = columnLength - 1;

//   for (let i = 1; i <= maxNeighbors; i++) {
//     switch (i) {
//       case 1:
//         if (yIndex >= 1 && xIndex < xIndexMAX) {
//           const bro = field[yIndex - 1][xIndex + 1];
//           neighbors.push(bro);

//           jail[`n${i}`] = field[yIndex - 1][xIndex + 1];
//         }
//         break;
//       case 2:
//         if (xIndex < xIndexMAX) {
//           const bro = field[yIndex][xIndex + 1];
//           bro;
//           neighbors.push(bro);
//         }
//         break;
//       case 3:
//         if (yIndex < yIndexMAX && xIndex < xIndexMAX) {
//           const bro = field[yIndex + 1][xIndex + 1];
//           neighbors.push(bro);
//         }
//         break;
//       case 4:
//         if (yIndex < yIndexMAX) {
//           const bro = field[yIndex + 1][xIndex];
//           neighbors.push(bro);
//         }
//         break;
//       case 5:
//         if (xIndex >= 1 && yIndex < yIndexMAX) {
//           const bro = field[yIndex + 1][xIndex - 1];
//           neighbors.push(bro);
//         }
//         break;
//       case 6:
//         if (xIndex >= 1) {
//           const bro = field[yIndex][xIndex - 1];
//           neighbors.push(bro);
//         }
//         break;
//       case 7:
//         if (xIndex >= 1 && yIndex >= 1) {
//           const bro = field[yIndex - 1][xIndex - 1];
//           neighbors.push(bro);
//         }
//         break;
//       case 8:
//         if (yIndex >= 1) {
//           const bro = field[yIndex - 1][xIndex];
//           neighbors.push(bro);
//         }
//         break;
//       default:
//         break;
//     }
//   }

//   return neighbors;
// }

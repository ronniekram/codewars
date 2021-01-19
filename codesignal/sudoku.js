// create helper functions
// get_row(board, row) -- return all cells for provided row
// get_column(board, column) -- return all cells for provided column
// get_square(board, square) -- return all cells for provided square (board can be split into 9 3x3 squares) -- given the row and column coordinates, can identify square and return all elements 


function sudoku2(grid) {
  // check to see if given grid is valid
  // helper function to find column
  // helper function to find row
  // helper function to find square
  // grid is always 9x9
  // iterate over grid and see if each row, column and square is valid
  let trueFalse = []
  if (!validSquares(grid)) return false;
  for (let i = 0; i < grid.length; i++) {
      if (validNumbers(getColumn(grid, i)) && validNumbers(getRow(grid, i))) {
          trueFalse.push(true)
      } else {
        trueFalse.push(false)
      }
  }
  // if conditions are not met
  for (let i = 0; i < trueFalse.length; i ++) {
    if (trueFalse[i] === false) {
      return false;
      break;
    }
  }
  return true;
}

function getColumn(grid, n) {
  // based on column # and grid
  // iterate through each array in grid
  let column = []
  for (let i = 0; i < grid.length; i++) {
      column.push(grid[i][n]);
  }
  return column;
}

function getRow(grid, n) {
  //input should be 0-8
  return grid[n]
}

function getSquares(grid) {
// break each row into 3 arrays
const squares = [
  [], [], [], [], [], [], [], [], []
];

grid.forEach((row, rowIndex) => {
  row.forEach((cell, columnIndex) => {
    const squareIndex = (Math.floor(rowIndex / 3) * 3) + Math.floor(columnIndex / 3);

    squares[squareIndex].push(cell);
  })
});

return squares;
}

function validSquares(grid){
let squares = getSquares(grid);
let trueFalse = [];
for (let i = 0; i < squares.length; i++) {
  if (validNumbers(squares[i]))  {
          trueFalse.push(true)
      } else {
        trueFalse.push(false)
      }
  }
  // if conditions are not met
  for (let i = 0; i < trueFalse.length; i ++) {
    if (trueFalse[i] === false) {
      return false;
      break;
    }
  }
  return true;
}
function validNumbers(x) {
// x represents either a row, column or square
// loop to iterate through given section
let freqCounter = {};
for (let i = 0; i < x.length; i++) {
  // count only values that are not '.'
  if (x[i] !== '.') {
    freqCounter[x[i]] = (freqCounter[x[i]] || 0) + 1;
  }
}
// create an array of obj keys and values
let freqArr = Object.entries(freqCounter);
// for each element in freqArr
for (let i = 0; i < freqArr.length; i++) {
  if (freqArr[i][1] > 1) {
    // if any count in the array is greater than one, not valid
    return false;
    break;
  }
}
// if conditional does not return false, the row, column or square is valid
return true;
}
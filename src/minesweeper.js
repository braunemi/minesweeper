const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for(let i = 0; i < numberOfRows; i++) {
    row = [];
    for(let j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for(let i = 0; i < numberOfRows; i++) {
    row = [];
    for(let j = 0; j < numberOfColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }

  // This piece of code has potential of adding Bombs where there is an already an existing bomb
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }

  return board;
};

const printBoard = (board) => {
  let newBoard = board.map(function(row) {
    return row.join(' | ');
  }).join('\n');

  console.log(newBoard);
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

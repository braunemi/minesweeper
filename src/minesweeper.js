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

    let bombLocation = board[randomRowIndex][randomColumnIndex];
    if(bombLocation !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }

  return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  neighborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(function(offset) {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumenIndex = columenIndex + offset[1];
    if(neighborRowIndex >= 0 && neighborRowIndex <= numberOfRows &&
        neighborColumnIndex >= 0 && neighborColumnIndex <= numberOfColumns) {
          if(bombBoard[neighborRowIndex][neighborColumnIndex] == 'B')
            numberOfBombs++;
        }
  });
  return numberOfBombs;
};

const flipTile = (playerBoard, bombBoard, rowIndex, columenIndex) => {

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

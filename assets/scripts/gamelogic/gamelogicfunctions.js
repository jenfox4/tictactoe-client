const store = require('./../store.js')

const findPosition = function (gameBoard, gamePiece) {
//  gameBoard = game board you are playing, gamePiece = X or O's
  const position = []
  // array of index position of X or O
  let idx = gameBoard.indexOf(gamePiece)
  while (idx !== -1) {
  // while X is found in the string (not -1), keep looking.
    position.push(idx)
    // if a position is found, push to position array
    idx = gameBoard.indexOf(gamePiece, idx + 1)
    // find next position of x or o by starting the search from the last x + 1 index
  } return position
}

// function to place X or O in spot in the board
const play = function (player, positionToPutPiece, gameBoard) {
  // player = x or o, positionToPutPiece is an index number, gameBoard is the board
  if (gameBoard[positionToPutPiece] === '') {
    gameBoard[positionToPutPiece] = player
  } else {
  }
}

const minimumPlays = function (gameBoard) {
// checks to see if enough moves have been played for a win
  const xPosition = findPosition(gameBoard, 'x')
  // find all the positions of X
  const oPosition = findPosition(gameBoard, 'o')
  // find all the positions of O
  if ((xPosition.length + oPosition.length) === 9) {
    return 'draw'
  } else if ((xPosition.length + oPosition.length) >= 5) {
    // if 5 or more positions have been filled than check to see if anyone has won
    if (checkWinningCondition(xPosition) === 'lose' && checkWinningCondition(oPosition) === 'lose') {
      // if noone has won, keep playing
    } else if (checkWinningCondition(xPosition) === 'win') {
      return 'x'
      // if x won, return win for x
    } else if (checkWinningCondition(oPosition) === 'win') {
      return 'o'
      // if o win return win for x
    }
  } else if ((xPosition.length + oPosition.length) < 5) {
    // if less than 5 moves have been played, keep playing
  }
}

const checkWinningCondition = function (arr) {
  if (arr.includes(0) && arr.includes(1) && arr.includes(2)) {
    // first row across
    return 'win'
  }
  if (arr.includes(3) && arr.includes(4) && arr.includes(5)) {
    // second row across
    return 'win'
  }
  if (arr.includes(6) && arr.includes(7) && arr.includes(8)) {
    // third row across
    return 'win'
  }
  if (arr.includes(0) && arr.includes(3) && arr.includes(6)) {
    // first column down
    return 'win'
  }
  if (arr.includes(1) && arr.includes(4) && arr.includes(7)) {
    // second column down
    return 'win'
  }
  if (arr.includes(2) && arr.includes(5) && arr.includes(8)) {
    // third column down
    return 'win'
  }
  if (arr.includes(0) && arr.includes(4) && arr.includes(8)) {
    // diagonal one
    return 'win'
  }
  if (arr.includes(2) && arr.includes(4) && arr.includes(6)) {
    // diagonal two
    return 'win'
  } else {
    return 'lose'
  }
}

const computer = function (array) {
  const emptySpace = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '') {
      emptySpace.push(i)
    }
  }
  return emptySpace[Math.floor(Math.random() * emptySpace.length)]
}

const checkWinning = function (player) {
  if (minimumPlays(store.gameBoard) === 'x') {
    store.winner = 'x'
    store.over = true
    player = 'x'
    // finds all the 'x' on board and determines winner
    // resets internal board
  } else if (minimumPlays(store.gameBoard) === 'o') {
    store.winner = 'o'
    store.over = true
    player = 'x'
    // finds all the 'o' on board and determines winner
    store.gameBoard = ['', '', '', '', '', '', '', '', '']
    // resets internal board
  } else if (minimumPlays(store.gameBoard) === 'draw') {
    store.winner = ('draw')
    store.over = true
    player = 'x'
    store.gameBoard = ['', '', '', '', '', '', '', '', '']
  }
}

module.exports = {
  findPosition,
  checkWinningCondition,
  play,
  minimumPlays,
  computer,
  checkWinning
}

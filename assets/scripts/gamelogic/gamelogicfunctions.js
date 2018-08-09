
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

/* const findPositionOfO = function (gameBoard) {
// find all the O's on the board
  const positionOfO = []
  // array of index position of X
  const elementO = 'O'
  // looking for the game piece X
  let idx = gameBoard.indexOf(elementO)
  while (idx !== -1) {
  // while X is found in the string (not -1), keep looking.
    positionOfO.push(idx)
    // if an x position is found, push to positionOfX array
    idx = gameBoard.indexOf(elementO, idx + 1)
    // find next position of x by starting the search from the last x + 1 index
  } return positionOfO
} */

// function to place X or O in spot in the board
const play = function (player, positionToPutPiece, gameBoard) {
  // player = x or o, positionToPutPiece is an index number, gameBoard is the board
  if (gameBoard[positionToPutPiece] === '') {
    gameBoard[positionToPutPiece] = player
  } else {
    // console.log('sorry that space is taken')
  }
}

const minimumPlays = function (gameBoard) {
// checks to see if enough moves have been played for a win
  const xPosition = findPosition(gameBoard, 'x')
  // find all the positions of X
  const oPosition = findPosition(gameBoard, 'o')
  // find all the positions of O
  if ((xPosition.length + oPosition.length) >= 5 && (xPosition.length + oPosition.length) !== 9) {
    // if 5 or more positions have been filled than check to see if anyone has won
    if (checkWinningCondition(xPosition) === 'lose' && checkWinningCondition(oPosition) === 'lose') {
      // console.log('keep playing')
      // if noone has won, keep playing
    } else if (checkWinningCondition(xPosition) === 'win') {
      return 'x'
      // if x won, return win for x
    } else if (checkWinningCondition(oPosition) === 'win') {
      return 'o'
      // if o win return win for x
    }
  } else if ((xPosition.length + oPosition.length) < 5) {
    // console.log('keep playing')
    // if less than 5 moves have been played, keep playing
  } else if ((xPosition.length + oPosition.length) === 9) {
    return 'draw'
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

const totalScore = function (games) {
  let count = 0
  let gamesArr = games.games
  for (let i = 0; i < gamesArr.length; i++) {
    if (minimumPlays(gamesArr[i].cells) === 'x') {
    //  console.log(minimumPlays(gamesArr[i].cells))
      count += 1
    //  console.log(count)
    }
  }
}

/* let gamesObj = {"games":[
  {"id":108,"cells": ["x","x","x","o","o","x","o","",""],"over":false,"player_x":{"id":61,"email":"zzz@zzz"},"player_o":null},
  {"id":109,"cells":["x","x","x","o","o","x","o","",""],"over":false,"player_x":{"id":61,"email":"zzz@zzz"},"player_o":null},
  {"id":113,"cells":["x","x","x","o","o","x","o","",""],"over":false,"player_x":{"id":61,"email":"zzz@zzz"},"player_o":null},
  {"id":111,"cells":["x","x","x","o","o","x","o","",""],"over":false,"player_x":{"id":61,"email":"zzz@zzz"},"player_o":null},
  {"id":117,"cells":["x","x","x","o","o","x","o","",""],"over":false,"player_x":{"id":61,"email":"zzz@zzz"},"player_o":null}
]} */

module.exports = {
  findPosition,
  checkWinningCondition,
  play,
  minimumPlays,
  totalScore
}

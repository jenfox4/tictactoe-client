const findPositionOfX = function (gameBoard) {
// find all the X's on the board
  let positionOfX = []
  // array of index position of X
  let elementX = 'X'
  // looking for the game piece X
  let idx = gameBoard.indexOf(elementX)
  while (idx !== -1) {
  // while X is found in the string (not -1), keep looking.
    positionOfX.push(idx)
    // if an x position is found, push to positionOfX array
    idx = gameBoard.indexOf(elementX, idx + 1)
    // find next position of x by starting the search from the last x + 1 index
  } return positionOfX
}

const findPositionOfO = function (gameBoard) {
// find all the O's on the board
  let positionOfO = []
  // array of index position of X
  let elementO = 'O'
  // looking for the game piece X
  let idx = gameBoard.indexOf(elementO)
  while (idx !== -1) {
  // while X is found in the string (not -1), keep looking.
    positionOfO.push(idx)
    // if an x position is found, push to positionOfX array
    idx = gameBoard.indexOf(elementO, idx + 1)
    // find next position of x by starting the search from the last x + 1 index
  } return positionOfO
}

const checkWinningCondition = function (arr) {
  if (arr.includes(0) && arr.includes(1) && arr.includes(2)) {
    // first row across
    return 'win!'
  }
  if (arr.includes(3) && arr.includes(4) && arr.includes(5)) {
    // second row across
    return 'win!'
  }
  if (arr.includes(6) && arr.includes(7) && arr.includes(8)) {
    // third row across
    return 'win!'
  }
  if (arr.includes(0) && arr.includes(3) && arr.includes(6)) {
    // first column down
    return 'win!'
  }
  if (arr.includes(1) && arr.includes(4) && arr.includes(7)) {
    // second column down
    return 'win!'
  }
  if (arr.includes(2) && arr.includes(5) && arr.includes(8)) {
    // third column down
    return 'win!'
  }
  if (arr.includes(0) && arr.includes(4) && arr.includes(8)) {
    // diagonal one
    return 'win!'
  }
  if (arr.includes(2) && arr.includes(4) && arr.includes(6)) {
    // diagonal two
    return 'win!'
  } else {
    return 'loser'
  }
}

module.exports = {
  findPositionOfX,
  findPositionOfO,
  checkWinningCondition
}

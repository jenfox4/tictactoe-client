/* const gameBoard = ['x', // 0
  'o', // 1
  'x', // 2
  'o', // 3
  'x', // 4
  '', // 5
  'o', // 6
  'x', // 7
  'o'
] // 8
*/
const store = require('./../store.js')

const findEmptySpaces = function (gameBoard) {
  const emptySpaces = []
  let idx = gameBoard.indexOf('')
  while (idx !== -1) {
    emptySpaces.push(idx)
    idx = gameBoard.indexOf('', idx + 1)
  }
  return emptySpaces
}

function winning (board, player) {
  if (
    (board[0] === player && board[1] === player && board[2] === player) ||
    (board[3] === player && board[4] === player && board[5] === player) ||
    (board[6] === player && board[7] === player && board[8] === player) ||
    (board[0] === player && board[3] === player && board[6] === player) ||
    (board[1] === player && board[4] === player && board[7] === player) ||
    (board[2] === player && board[5] === player && board[8] === player) ||
    (board[0] === player && board[4] === player && board[8] === player) ||
    (board[2] === player && board[4] === player && board[6] === player)
  ) {
    return true
  } else {
    return false
  }
}

const moves = []

function Move (index, score) {
  this.index = index
  this.score = score
}

const minimax = function (emptySpaces, gameBoard) {
  const spacesCount = emptySpaces.length
  for (let i = 0; i < spacesCount; i++) {
    const score = 0
    const moveNumber = i
    const newMove = new Move(emptySpaces[0], score)
    moves.push(newMove)
    gameBoard[emptySpaces[0]] = 'o'
    if (winning(gameBoard, 'o') === true) {
      moves[moveNumber].score += 10
      break
    }
    const newEmptySpaces = findEmptySpaces(gameBoard)

    for (let i = 0; i < newEmptySpaces.length; i++) {
      gameBoard[newEmptySpaces[i]] = 'x'
      if (winning(gameBoard, 'x') === true) {
        moves[moveNumber].score -= 10
      }
      const newNestedEmptySpaces = findEmptySpaces(gameBoard)

      for (let i = 0; i < newNestedEmptySpaces.length; i++) {
        gameBoard[newNestedEmptySpaces[i]] = 'o'
        if (winning(gameBoard, 'o') === true) {
          moves[moveNumber].score += 10
        }
        const newNewNestedEmptySpaces = findEmptySpaces(gameBoard)

        for (let i = 0; i < newNewNestedEmptySpaces.length; i++) {
          gameBoard[newNewNestedEmptySpaces[i]] = 'x'
          if (winning(gameBoard, 'x') === true) {
            moves[moveNumber].score -= 10
          }
          const yetAnotherEmptySpaces = findEmptySpaces(gameBoard)

          for (let i = 0; i < yetAnotherEmptySpaces.length; i++) {
            gameBoard[yetAnotherEmptySpaces[i]] = 'o'
            if (winning(gameBoard, 'o') === true) {
              moves[moveNumber].score += 10
            }
            const andAnotherEmptySpaces = findEmptySpaces(gameBoard)

            for (let i = 0; i < andAnotherEmptySpaces.length; i++) {
              gameBoard[andAnotherEmptySpaces[i]] = 'x'
              if (winning(gameBoard, 'x') === true) {
                moves[moveNumber].score -= 10
              }

              const andYesAnotherEmptySpaces = findEmptySpaces(gameBoard)

              for (let i = 0; i < yetAnotherEmptySpaces.length; i++) {
                gameBoard[andYesAnotherEmptySpaces[i]] = 'o'
                if (winning(gameBoard, 'o') === true) {
                  moves[moveNumber].score += 10
                }
                const noWayAnother = findEmptySpaces(gameBoard)

                for (let i = 0; i < noWayAnother.length; i++) {
                  gameBoard[noWayAnother[i]] = 'x'
                  if (winning(gameBoard, 'x') === true) {
                    moves[moveNumber].score -= 10
                  }
                  gameBoard[noWayAnother[i]] = ''
                }
                gameBoard[andYesAnotherEmptySpaces[i]] = ''
              }
              gameBoard[andAnotherEmptySpaces[i]] = ''
            }
            gameBoard[yetAnotherEmptySpaces[i]] = ''
          }
          gameBoard[newNewNestedEmptySpaces[i]] = ''
        }
        gameBoard[newNestedEmptySpaces[i]] = ''
      }
      gameBoard[newEmptySpaces[i]] = ''
    }
    gameBoard[emptySpaces[0]] = ''
    emptySpaces.splice([0], 1)
  }
  return moves
}

const bestMoveFinder = function (moveArr) {
  let bestScore = moveArr[0].score
  let bestMove = moveArr[0].index
  for (let i = 1; i < moveArr.length; i++) {
    if (moveArr[i].score > bestScore) {
      bestScore = moveArr[i].score
      bestMove = moveArr[i].index
    }
  }
  return bestMove
}

const clearMoves = function (moveArr) {
  const length = moveArr.length
  for (let i = 0; i < length; i++) {
    moveArr.pop()
  }
}

module.exports = {
  findEmptySpaces,
  minimax,
  bestMoveFinder,
  clearMoves,
  moves
}

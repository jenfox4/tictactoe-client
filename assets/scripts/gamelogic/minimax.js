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
    // console.log('possible spots for current move by x to test', emptySpaces)
    gameBoard[emptySpaces[0]] = 'o'
    // console.log('\nmoving x to spot ',  emptySpaces[0], ' for testing')
    if (winning(gameBoard, 'o') === true) {
      moves[moveNumber].score += 10
      // console.log('move' , moves[moveNumber])
      // console.log('x wins current round')
      break
    }
    const newEmptySpaces = findEmptySpaces(gameBoard)

    for (let i = 0; i < newEmptySpaces.length; i++) {
      // console.log('possible spots for next move o to test', newEmptySpaces)
      gameBoard[newEmptySpaces[i]] = 'x'
      // console.log(' moving o to spot ',  newEmptySpaces[i], ' for testing')
      if (winning(gameBoard, 'x') === true) {
        moves[moveNumber].score -= 10
        // console.log('move', moves[moveNumber])
        // console.log('o wins after your turn')
      }
      const newNestedEmptySpaces = findEmptySpaces(gameBoard)

      for (let i = 0; i < newNestedEmptySpaces.length; i++) {
        //  console.log('possible spots in 2 moves by x to test', newNestedEmptySpaces)
        gameBoard[newNestedEmptySpaces[i]] = 'o'
        //  console.log(' moving x to spot ',  newNestedEmptySpaces[i], ' for testing')
        if (winning(gameBoard, 'o') === true) {
          moves[moveNumber].score += 10
          //  console.log('move number', moves[moveNumber])
          //  console.log('x wins in 2 rounds')
        }
        const newNewNestedEmptySpaces = findEmptySpaces(gameBoard)

        for (let i = 0; i < newNewNestedEmptySpaces.length; i++) {
          //  console.log('possible spots in 2 moves by o to test', newNewNestedEmptySpaces[i])
          gameBoard[newNewNestedEmptySpaces[i]] = 'x'
          //  console.log(' moving o to spot ', newNewNestedEmptySpaces[i], ' for testing')
          if (winning(gameBoard, 'x') === true) {
            moves[moveNumber].score -= 10
            //  console.log('move number', moves[moveNumber])
            //  console.log('o wins in 2 rounds')
          }
          const yetAnotherEmptySpaces = findEmptySpaces(gameBoard)

          for (let i = 0; i < yetAnotherEmptySpaces.length; i++) {
            //  console.log('possible spots in 3 moves by x to test', yetAnotherEmptySpaces)
            gameBoard[yetAnotherEmptySpaces[i]] = 'o'
            //  console.log(' moving x to spot ',  yetAnotherEmptySpaces[i], ' for testing')
            if (winning(gameBoard, 'o') === true) {
              moves[moveNumber].score += 10
              //    console.log('move number', moves[moveNumber])
              //    console.log('x wins in 2 rounds')
            }
            const andAnotherEmptySpaces = findEmptySpaces(gameBoard)

            for (let i = 0; i < andAnotherEmptySpaces.length; i++) {
              //    console.log('possible spots in 3 moves by o to test', andAnotherEmptySpaces[i])
              gameBoard[andAnotherEmptySpaces[i]] = 'x'
              //    console.log(' moving o to spot ', andAnotherEmptySpaces[i], ' for testing')
              if (winning(gameBoard, 'x') === true) {
                moves[moveNumber].score -= 10
                //    console.log('move number', moves[moveNumber])
                //    console.log('o wins in 2 rounds')
              }

              const andYesAnotherEmptySpaces = findEmptySpaces(gameBoard)

              for (let i = 0; i < yetAnotherEmptySpaces.length; i++) {
                //    console.log('possible spots in 3 moves by x to test', andYesAnotherEmptySpaces)
                gameBoard[andYesAnotherEmptySpaces[i]] = 'o'
                //    console.log(' moving x to spot ',  andYesAnotherEmptySpaces[i], ' for testing')
                if (winning(gameBoard, 'o') === true) {
                  moves[moveNumber].score += 10
                  //    console.log('move number', moves[moveNumber])
                  //    console.log('x wins in 2 rounds')
                }
                const noWayAnother = findEmptySpaces(gameBoard)

                for (let i = 0; i < noWayAnother.length; i++) {
                  //    console.log('possible spots in 3 moves by o to test', noWayAnother[i])
                  gameBoard[noWayAnother[i]] = 'x'
                  //    console.log(' moving o to spot ', noWayAnother[i], ' for testing')
                  if (winning(gameBoard, 'x') === true) {
                    moves[moveNumber].score -= 10
                    //    console.log('move number', moves[moveNumber])
                    //    console.log('o wins in 2 rounds')
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
// console.log(emptySpaces)
// console.log(minimax(emptySpaces, store.gameBoard))
// console.log('moves', moves)

const bestMoveFinder = function (moveArr) {
  let bestScore = moveArr[0].score
  // console.log('best score', bestScore)
  let bestMove = moveArr[0].index
  // console.log('best move', bestMove)
  for (let i = 1; i < moveArr.length; i++) {
    if (moveArr[i].score > bestScore) {
    //   console.log('if statement', moveArr[i].score)
      bestScore = moveArr[i].score
      //   console.log('new score', bestScore)
      bestMove = moveArr[i].index
    //   console.log('new best move', bestMove)
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
// console.log(bestMoveFinder(minimax(findEmptySpaces(store.gameBoard), store.gameBoard)))

// const emptySpaces = findEmptySpaces(store.gameBoard)
// console.log('empty spaces', emptySpaces)
// console.log('empty spaces length', emptySpaces.length)
// bestMoveFinder(minimax(emptySpaces, store.gameBoard))
// const index = bestMoveFinder(moves)
// console.log('best move', index)
// clearMoves(moves)

module.exports = {
  findEmptySpaces,
  minimax,
  bestMoveFinder,
  clearMoves,
  moves
}

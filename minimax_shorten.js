const minimax = function (gameBoard, player) {
  const availableSpaces = findEmptySpaces(gameBoard)
  const spacesCount = availableSpaces.length
  for (let i = 0; i < spacesCount; i++) {
    const score = 0
    const moveNumber = i
    const newMove = new Move(emptySpaces[0], score)
    moves.push(newMove)
    // console.log('possible spots for current move by x to test', emptySpaces)
    gameBoard[emptySpaces[0]] = player
    // console.log('\nmoving x to spot ',  emptySpaces[0], ' for testing')
    if (winning(gameBoard, player) === true) {
      moves[moveNumber].score += 10
      // console.log('move' , moves[moveNumber])
      // console.log('x wins current round')
      break
    }

const loop = function (gameBoard, player) {
      const availableSpaces = findEmptySpaces(gameBoard)
      for (let i = 0; i < availableSpaces.length; i++) {
        // console.log('possible spots for next move o to test', newEmptySpaces)
        gameBoard[availableSpaces[i]] = player
        // console.log(' moving o to spot ',  newEmptySpaces[i], ' for testing')
        if (winning(gameBoard, player) === true) {
          moves[moveNumber].score += 10
        // console.log('move', moves[moveNumber])
        // console.log('o wins after your turn')
        }
      }
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
  console.log('moves', moves)
  return moves
}

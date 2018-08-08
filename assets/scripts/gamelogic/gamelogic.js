// game logic for winning/losing/draw
const gameFunctions = require('./gamelogicfunctions.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']
// 3 by 3 game board of 9 locations
const playerOne = 'X'
const playerTwo = 'O'

gameFunctions.play(playerOne, 0, gameBoard)
gameFunctions.play(playerTwo, 1, gameBoard)
gameFunctions.play(playerOne, 3, gameBoard)
gameFunctions.play(playerTwo, 2, gameBoard)
gameFunctions.play(playerOne, 7, gameBoard)
gameFunctions.play(playerTwo, 8, gameBoard)
console.log(gameBoard)
gameFunctions.minimumPlays(gameBoard)

// const xWinningCondition = gameFunctions.checkWinningCondition(gameFunctions.findPosition(gameBoard, playerOne))
// checks final game status of player x

// const oWinningCondition = gameFunctions.checkWinningCondition(gameFunctions.findPosition(gameBoard, playerTwo))
// checks final game status of player o

// console.log('player one', xWinningCondition, 'player two', oWinningCondition)

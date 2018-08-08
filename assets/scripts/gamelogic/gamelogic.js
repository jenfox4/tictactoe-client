// game logic for winning/losing/draw
const gameFunctions = require('./gamelogicfunctions.js')

const gameBoard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'X', 'X']
// 3 by 3 game board of 9 locations

const xWinningCondition = gameFunctions.checkWinningCondition(gameFunctions.findPositionOfX(gameBoard))
const oWinningCondition = gameFunctions.checkWinningCondition(gameFunctions.findPositionOfO(gameBoard))

console.log('x', xWinningCondition, 'o', oWinningCondition)

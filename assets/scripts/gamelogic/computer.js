const api = require('./api.js')
// const authApi = require('./../auth/api.js')
const ui = require('./ui.js')
// const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')
const gamelogicfunctions = require('./gamelogicfunctions.js')
const minimax = require('./minimax.js')

let player = 'o'
// function that determines game winnings for computer game

const easyComputerPlaying = function () {
  if (store.over || store.invalid) {
    return
  }
  player = 'o'
  const index = gamelogicfunctions.computer(store.gameBoard)
  // finds id of div player has clicked, same as index in array
  const value = player
  // finds which player is currently being played
  if (store.gameBoard[index] === '') {
    store.gameBoard[index] = player
    ui.placeXOrO(index, player)
    gamelogicfunctions.checkWinning()
  } else {
    ui.invalidMove()
    // if div is taken, cannot do that move
  }
  api.updateGame(index, value, store.over)
    .then(ui.winStatus(store.over, store.winner))
    .catch(ui.updateGameFail)
}

const hardComputerPlaying = function () {
  if (store.over || store.invalid) {
    return
  }
  player = 'o'
  const emptySpaces = minimax.findEmptySpaces(store.gameBoard)
  const index = minimax.bestMoveFinder(minimax.minimax(emptySpaces, store.gameBoard))
  // finds id of div player has clicked, same as index in array
  const value = player
  // finds which player is currently being played
  store.gameBoard[index] = player
  ui.placeXOrO(index, player)
  minimax.clearMoves(minimax.moves)
  gamelogicfunctions.checkWinning()
  api.updateGame(index, value, store.over)
    .then(ui.winStatus(store.over, store.winner))
    .catch(ui.updateGameFail)
}

module.exports = {
  easyComputerPlaying,
  hardComputerPlaying
}

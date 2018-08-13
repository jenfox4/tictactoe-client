const api = require('./api.js')
// const authApi = require('./../auth/api.js')
const ui = require('./ui.js')
// const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')
const gamelogicfunctions = require('./gamelogicfunctions.js')

let player = 'o'
// function that determines game winnings for computer game

const onComputerBoardClick = function () {
  console.log('onComputerBoardClick works!')
  console.log('store.over', store.over)
  console.log('store.invalid', store.invalid)
  if (store.over || store.invalid) {
    console.log('stopped working')
    return
  }
  player = 'o'
  const index = gamelogicfunctions.computer(store.gameBoard)
  // finds id of div player has clicked, same as index in array
  const value = player
  // finds which player is currently being played
  if (store.gameBoard[index] === '') {
    console.log(store.gameBoard)
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

module.exports = {
  onComputerBoardClick
}

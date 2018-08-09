// event listeners for game logic (i.e. sending information about new X/O location)
// const api = require('./api.js')
const ui = require('./ui.js')
// const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('../store.js')
const gamelogicfunctions = require('./gamelogicfunctions.js')

let player = 'x'

const onBoardClick = function (event) {
  event.preventDefault()
  console.log(event.target.id)
  console.log(store.gameBoard[event.target.id] = player)
  console.log(store.gameBoard)
  ui.placeXOrO(event.target.id, player)
  switchPlayer()
  if (gamelogicfunctions.minimumPlays(store.gameBoard) === 'x') {
    ui.xWins()
  } else if ((gamelogicfunctions.minimumPlays(store.gameBoard)) === 'o') {
    ui.oWins()
  } else if ((gamelogicfunctions.minimumPlays(store.gameBoard)) === 'draw') {
    ui.draw()
  } else {
    console.log('continue playing')
  }
}

const switchPlayer = function (event) {
  if (player === 'x') {
    player = 'o'
    ui.switchPlayer('o')
  } else {
    player = 'x'
    ui.switchPlayer('x')
  }
}

module.exports = {
  onBoardClick,
  switchPlayer
}

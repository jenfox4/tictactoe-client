// event listeners for game logic (i.e. sending information about new X/O location)
const api = require('./api.js')
// const authApi = require('./../auth/api.js')
const ui = require('./ui.js')
// const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')
const gamelogicfunctions = require('./gamelogicfunctions.js')

let player = 'x'

const onBoardClick = function (event) {
  event.preventDefault()
  const index = event.target.id
  store.gameBoard[index] = player
  const value = player
  let over = false
  // console.log(store.gameBoard)
  ui.placeXOrO(event.target.id, player)
  if (gamelogicfunctions.minimumPlays(store.gameBoard) === 'x') {
    ui.xWins()
    over = true
    player = 'x'
    store.gameBoard = ['', '', '', '', '', '', '', '', '']
  } else if ((gamelogicfunctions.minimumPlays(store.gameBoard)) === 'o') {
    ui.oWins()
    over = true
    player = 'x'
    store.gameBoard = ['', '', '', '', '', '', '', '', '']
  } else if ((gamelogicfunctions.minimumPlays(store.gameBoard)) === 'draw') {
    ui.draw()
    over = true
    player = 'x'
    store.gameBoard = ['', '', '', '', '', '', '', '', '']
  }
  // console.log(player)
  api.updateGame(index, value, over)
    .then(switchPlayer())
    .catch(ui.updateGameFail)
  // console.log(index, value, over)
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

const createNewGame = function (event) {
  api.createNewGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}

const refresh = function () {
  switchPlayer()
  api.createNewGame()
    .then(ui.refresh)
    .catch(ui.newGameFail)
}

const pastGames = function () {
  api.pastGames()
    .then(ui.pastGames)
    .catch(ui.failGames)
}

module.exports = {
  onBoardClick,
  switchPlayer,
  createNewGame,
  refresh,
  pastGames
}

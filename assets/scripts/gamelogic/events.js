// event listeners for game logic (i.e. sending information about new X/O location)
const api = require('./api.js')
// const authApi = require('./../auth/api.js')
const ui = require('./ui.js')
// const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')
const gamelogicfunctions = require('./gamelogicfunctions.js')

// game should always start with player 1 being X
let player = 'x'

// function that determines game winnings
const onBoardClick = function (event) {
  event.preventDefault()
  const index = event.target.id
  // finds id of div player has clicked, same as index in array
  const value = player
  // finds which player is currently being played
  let winner = null
  // later used to let ui know which winner to log
  let over = false
  if (store.gameBoard[index] === '') {
    store.gameBoard[index] = player
    // console.log(store.gameBoard)
    ui.placeXOrO(event.target.id, player)
    // puts X or O on the board
    if (gamelogicfunctions.minimumPlays(store.gameBoard) === 'x') {
      winner = 'Player One'
      over = true
      player = 'x'
      // finds all the 'x' on board and determines winner
      store.gameBoard = ['', '', '', '', '', '', '', '', '']
      // resets internal board
    } else if ((gamelogicfunctions.minimumPlays(store.gameBoard)) === 'o') {
      winner = 'Player Two'
      over = true
      player = 'x'
      // finds all the 'o' on board and determines winner
      store.gameBoard = ['', '', '', '', '', '', '', '', '']
      // resets internal board
    } else if ((gamelogicfunctions.minimumPlays(store.gameBoard)) === 'draw') {
      winner = ('Its a draw')
      over = true
      player = 'x'
      store.gameBoard = ['', '', '', '', '', '', '', '', '']
    } else {
      switchPlayer()
      // switches players for next round
    // console.log(player)
    }
  } else {
    ui.invalidMove()
    // if div is taken, cannot do that move
  }
  api.updateGame(index, value, over)
    .then(ui.winStatus(over, winner))
    .catch(ui.updateGameFail)
  // console.log(index, value, over)
}

const switchPlayer = function (event) {
  // switches player from x to o and vice versa
  if (player === 'x') {
    player = 'o'
    ui.switchPlayer('o')
  } else {
    player = 'x'
    ui.switchPlayer('x')
  }
}

// creates new game in api and has ui respond
const createNewGame = function (event) {
  api.createNewGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}

// refreshes game with refresh button and has ui respond
const refresh = function () {
  player = 'x'
  store.gameBoard = ['', '', '', '', '', '', '', '', '']
  api.createNewGame()
    .then(ui.refresh)
    .catch(ui.newGameFail)
}

// calls up past games in APU and has UI respond
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

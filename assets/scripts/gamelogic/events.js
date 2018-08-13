// event listeners for game logic (i.e. sending information about new X/O location)
const api = require('./api.js')
// const authApi = require('./../auth/api.js')
const ui = require('./ui.js')
// const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')
const gamelogicfunctions = require('./gamelogicfunctions.js')
const computer = require('./computer.js')

// game should always start with player 1 being X
let player = 'x'

// function that determines game winnings for human game
const onBoardClick = function (event) {
  if (store.over) {
    return
  }
  const index = event.target.id
  // finds id of div player has clicked, same as index in array
  const value = player
  // finds which player is currently being played
  // later used to let ui know which winner to log
  if (store.gameBoard[index] === '') {
    store.invalid = false
    store.gameBoard[index] = player
    // ui.placeXOrO(index, player)
    gamelogicfunctions.checkWinning(player)
  } else if ((store.gameBoard[index] !== '') && store.opponent === 'computer') {
    ui.invalidMove()
    store.invalid = true
    // if div is taken, cannot do that move
  } else {
    ui.invalidMove()
  }
  api.updateGame(index, value, store.over)
    .then(ui.placeXOrO(index, player),
      ui.winStatus(store.over, store.winner))
    .catch(ui.updateGameFail)
  // console.log(index, value, over)
  if (store.over === false && store.opponent === 'human') {
    switchPlayer()
  }
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

const compOrHuman = function (event) {
  if (store.opponent === 'human') {
    onBoardClick(event)
  } else if (store.opponent === 'easy-computer') {
    ui.computerGame()
    onBoardClick(event)
    setTimeout(computer.easyComputerPlaying(), 10000000)
  } else if (store.opponent === 'hard-computer') {
    ui.computerGame()
    onBoardClick(event)
    computer.hardComputerPlaying()
  }
}

// creates new game in api and has ui respond
const createNewGame = function (event) {
  store.opponent = event.target.id
  api.createNewGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}

// refreshes game with refresh button and has ui respond
const refresh = function () {
  player = 'x'
  store.over = false
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

const computerOptions = function () {
  ui.computerOptions()
}

module.exports = {
  onBoardClick,
  switchPlayer,
  createNewGame,
  refresh,
  pastGames,
  compOrHuman,
  computerOptions
}

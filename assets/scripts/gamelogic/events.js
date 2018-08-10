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
  console.log('onBoardClick works!')
  if (store.over) {
    return
  }
  const index = event.target.id
  // finds id of div player has clicked, same as index in array
  const value = player
  // finds which player is currently being played
  // later used to let ui know which winner to log
  if (store.gameBoard[index] === '') {
    console.log(store.gameBoard)
    store.invalid = false
    store.gameBoard[index] = player
    // ui.placeXOrO(index, player)
    gamelogicfunctions.checkWinning(player)
  } else if ((store.gameBoard[index] !== '') && store.opponent === 'computer') {
    ui.invalidMove()
    console.log('invalid', store.invalid)
    store.invalid = true
    console.log('invalid', store.invalid)
    // if div is taken, cannot do that move
  } else {
    ui.invalidMove()
  }
  console.log('store.over', store.over)
  api.updateGame(index, value, store.over)
    .then(ui.placeXOrO(index, player),
      ui.winStatus(store.over, store.winner))
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

const compOrHuman = function (event) {
  if (store.opponent === 'human') {
    console.log('human in compOrHuman')
    onBoardClick(event)
    switchPlayer()
  } else if (store.opponent === 'computer') {
    ui.computerGame()
    onBoardClick(event)
    setTimeout(computer.onComputerBoardClick(), 100000)
  }
}

// creates new game in api and has ui respond
const createNewGame = function (event) {
  console.log('event', event)
  console.log('event target', event.target)
  store.opponent = event.target.id
  console.log(store.opponent)
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

module.exports = {
  onBoardClick,
  switchPlayer,
  createNewGame,
  refresh,
  pastGames,
  compOrHuman
}

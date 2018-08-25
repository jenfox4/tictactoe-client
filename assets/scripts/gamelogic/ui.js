// User interface changes for game logic
const store = require('./../store.js')
const gamelogicfunctions = require('./gamelogicfunctions.js')
const config = require('./../config.js')

// places x or o in div
const placeXOrO = function (id, player) {
  if (player === 'x') {
    $('#' + id).html(`<img class="world-wonders" src="${config.imgUrl.player1}">`)
  } else if (player === 'o') {
    $('#' + id).html(`<img class="world-wonders" src="${config.imgUrl.player2}">`)
  }
}

// switches the player message displayed
const switchPlayer = function (str) {
  if (str === 'x') {
    $('#message').html('your turn <b>Player One</b>')
  } else if (str === 'o') {
    $('#message').html('your turn <b>Player Two</b>')
  } else if (str === 'computer') {
    $('#message').html('waiting for <b>computer</b>')
  }
}

// determines winning message displayed
const winStatus = function (over, winner) {
  if (over) {
    $('.score').show()
    if (winner === 'x') {
      $('#message').html(`${config.iconNames.player1}` + ' wins!')
    } else if (winner === 'o') {
      $('#message').html(`${config.iconNames.player2}` + ' wins!')
    } else if (winner === 'draw') {
      $('#message').html("It's a draw. no one wins.")
    }
  }
}
const computerGame = function () {
  $('#message').html('')
}

// player cannot move to that spot as it is taken
const invalidMove = function () {
  $('#message').html('That spot is taken!')
}

// new game created on log-in, choose between human or computer
const newGameSuccess = function (response) {
  store.game = response.game
  $('.box').empty()
  $('.row').show()
  $('#message').html('your turn <b>Player One</b>')
  $('#wins').empty()
  $('.game-board').show()
  $('.refresh').show()
  $('.useroptions').show()
  $('.comp-human').hide()
  $('.easy-or-hard-computer').hide()
  $('.welcome').hide()
}

// refresh button to continue playing
const refresh = function (response) {
  store.game = response.game
  $('.box').empty()
  $('.row').show()
  $('#message').html('your turn <b>Player One</b>')
  $('#wins').empty()
}

// new game api call has failed
const newGameFail = function (response) {
  $('.comp-human').html('<p>Well, this is embarrassing...we cant create a new game at the moment. Maybe go back to the good old pencil and paper tic tac toe?')
  $('.comp-human').addClass('fail')
}

// game updating has failed
const updateGameFail = function (response) {
  $('#message').html('This is embarrassing...we cant update your game. Maybe go back to the good old pencil and paper tic tac toe?')
}

// past games recalled and logged to score
const pastGames = function (response) {
  const game = response.games
  let wins = 0
  let lost = 0
  for (let i = 0; i < game.length; i++) {
    if (gamelogicfunctions.minimumPlays(game[i].cells) === 'x') {
      wins += 1
    }
  }
  for (let i = 0; i < game.length; i++) {
    if (gamelogicfunctions.minimumPlays(game[i].cells) === 'o') {
      lost += 1
    }
  }
  $('#wins').text('You have won ' + wins + ' times!')
  $('#lost').text('You have lost ' + lost + ' times.')
}

// if calling games fails
const failGames = function () {
  $('#wins').text('Something went wrong, please try again')
}

const computerOptions = function () {
  $('.comp-human').hide()
  $('.easy-or-hard-computer').show()
}

const startGame = function () {
  $('.comp-human').show()
  $('.icon-message').hide()
  $('.start-game').hide()
}

const changePlayerIcon = function (imageToChange, player) {
  $(`#${player}`).attr('src', imageToChange)
  $('#world-wonder-choose').modal('toggle')
}

module.exports = {
  placeXOrO,
  switchPlayer,
  winStatus,
  newGameSuccess,
  newGameFail,
  refresh,
  updateGameFail,
  pastGames,
  failGames,
  invalidMove,
  computerGame,
  computerOptions,
  startGame,
  changePlayerIcon
}

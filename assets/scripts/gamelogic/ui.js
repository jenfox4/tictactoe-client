// User interface changes for game logic
const store = require('./../store.js')

const placeXOrO = function (id, player) {
  $('#' + id).html('<p>' + player + '</p>')
}

const switchPlayer = function (str) {
  if (str === 'x') {
    $('#message').html('your turn <b>Player One</b>')
  } else {
    $('#message').html('your turn <b>Player Two</b>')
  }
}

const xWins = function () {
  $('#message').html('Player One wins!')
  $('.row').hide()
}

const oWins = function () {
  $('#message').html('Player Two wins!')
  $('.row').hide()
}

const draw = function () {
  $('#message').html('its a draw.')
  $('.row').hide()
}

const newGameSuccess = function (response) {
  store.game = response.game
  $('.game-board').show()
  $('.useroptions').show()
  $('.comp-human').hide()
}

const newGameFail = function (response) {
  $('.comp-human').html('<p>Well, this is embarrassing...we cant create a new game at the moment. Maybe go back to the good old pencil and paper tic tac toe?')
  $('.comp-human').addClass('fail')
}

const refresh = function (response) {
  store.game = response.game
  $('.box').empty()
  $('.row').show()
  $('#message').html('your turn <b>Player One</b>')
}

const updateGameFail = function (response) {
  $('#message').html('This is embarrassing...we cant update your game. Maybe go back to the good old pencil and paper tic tac toe?')
}

module.exports = {
  placeXOrO,
  switchPlayer,
  xWins,
  oWins,
  draw,
  newGameSuccess,
  newGameFail,
  refresh,
  updateGameFail
}

// User interface changes for game logic
const store = require('./../store.js')
const gamelogicfunctions = require('./gamelogicfunctions.js')

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

const winStatus = function (over, winner) {
  if (over) {
    $('.row').hide()
    $('.score').show()
    $('.past-games').show()
    switch (winner) {
      case 'Player One':
        $('#message').html('Player One wins!')
        break
      case 'Player Two':
        $('#message').html('Player Two wins!')
        break
      case 'Its a draw':
        $('#message').html('its a draw.')
    }
  }
}

const invalidMove = function () {
  $('#message').html('That spot is taken!')
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
  $('.past-games-list').empty()
  $('#wins').empty()
}

const updateGameFail = function (response) {
  $('#message').html('This is embarrassing...we cant update your game. Maybe go back to the good old pencil and paper tic tac toe?')
}

const pastGames = function (response) {
  console.log(response.games[0])
  const game = response.games
  console.log(game.length)
  $('.past-games').hide()
  let counter = 0
  for (let i = 0; i < game.length; i++) {
    if (gamelogicfunctions.minimumPlays(game[i].cells) === 'x') {
      counter += 1
    }
    $('.past-games-list').append('<li> ID: ' + game[i].id + ', Plays: ' + game[i].cells + '</li>')
  } $('#wins').text('You have won ' + counter + ' times!')
}

const failGames = function () {
  $('#wins').text('Something went wrong, please try again')
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
  invalidMove
}

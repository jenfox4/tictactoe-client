// User interface changes for game logic
const store = require('./../store.js')
const gamelogicfunctions = require('./gamelogicfunctions.js')

// places x or o in div
const placeXOrO = function (id, player) {
  $('#' + id).html('<p>' + player + '</p>')
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
    $('.past-games').show()
    $('#message').html(winner + ' wins!')
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
  $('.game-board').show()
  $('.useroptions').show()
  $('.comp-human').hide()
}

// refresh button to continue playing
const refresh = function (response) {
  store.game = response.game
  $('.box').empty()
  $('.row').show()
  $('#message').html('your turn <b>Player One</b>')
  $('.past-games-list').empty()
  $('#wins').empty()
  $('.score').hide()
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

// if calling games fails
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
  invalidMove,
  computerGame
}

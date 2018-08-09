// User interface changes for game logic

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
  $('.box').off('click')
}

const oWins = function () {
  $('#message').html('Player Two wins!')
  $('.box').off('click')
}

const draw = function () {
  $('#message').html('its a draw.')
  $('.box').off('click')
}

module.exports = {
  placeXOrO,
  switchPlayer,
  xWins,
  oWins,
  draw
}

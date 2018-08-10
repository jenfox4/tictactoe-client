// api interactions for game logic (i.e. game board)

const config = require('../config.js')
const store = require('./../store.js')

// creates new game
const createNewGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

// shows all past games
const pastGames = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

// shows specific past game
const showIndexGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games' + store.game.id,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

// updates current game with X and O values
const updateGame = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

module.exports = {
  createNewGame,
  pastGames,
  showIndexGame,
  updateGame
}

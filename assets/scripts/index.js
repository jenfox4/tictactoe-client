'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./gamelogic/events.js')

$(() => {
  // when signup submitted, call on onSignUp function
  $('#sign-up').on('submit', authEvents.onSignUp)

  // allows the form to resort back to normal after signing up
  $('.modal').on('blur', function () {
    $('#sign-up').show()
    $('.message').empty()
  })

  // when sign in submitted, call on signIn function
  $('#sign-in').on('submit', authEvents.onSignIn)

  // start new game when refresh button is hit
  $('.refresh').on('click', gameEvents.refresh)

  // when log out is clicked, go back to home page
  $('.log-out').on('click', authEvents.logOut)

  // when password changed form, submitted
  $('#change-password').on('submit', authEvents.changePassword)

  // if a box is clicked, fill with X or O
  $('.box').on('click', gameEvents.compOrHuman)

  // after choosing human or computer create new game
  $('.new-game').on('click', gameEvents.createNewGame)

  // after choosing computer, show easy or hard useroptions
  $('.computer-options').on('click', gameEvents.computerOptions)

  $('.player-stats').on('click', gameEvents.pastGames)

  $('.start-game').on('click', gameEvents.startGame)

  $('.world-wonders').on('click', authEvents.onChangePlayerModal)

  $('.choose-opponent').on('click', authEvents.chooseOpponent)
}
)

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
  $('.glyphicon-refresh').on('click', gameEvents.refresh)

  // start new game when signing in
  $('.new-game').on('click', gameEvents.createNewGame)

  // when log out is clicked, go back to home page
  $('.glyphicon-log-out').on('click', authEvents.logOut)

  // when password changed form, submitted
  $('#change-password').on('submit', authEvents.changePassword)

  // if a box is clicked, fill with X or O
  $('.box').on('click', gameEvents.onBoardClick)

  // toggles between player O and X
  $('.past-games').on('click', gameEvents.pastGames)
})

'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./gamelogic/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  // when signup submitted, call on onSignUp function

  $('.modal').on('blur', function () {
    $('#sign-up').show()
    $('.message').empty()
  })
  // allows the form to resort back to normal after signing up

  $('#sign-in').on('submit', authEvents.onSignIn)
  // when sign in submitted, call on signIn function

  $('.glyphicon-log-out').on('click', authEvents.logOut)
  // when log out is clicked, go back to home page

  $('#change-password').on('submit', authEvents.changePassword)
  // when password changed form, submitted

  $('.box').on('click', gameEvents.onBoardClick)
  // if a box is clicked, fill with X or O
  // toggles between player O and X
})

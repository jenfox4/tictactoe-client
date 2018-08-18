// user interface changes for authentication process (i.e. sign in/sign out)
const store = require('./../store.js')

const signUpSuccess = function (response) {
  // if user signed up successfully, display welcome message
  $('#sign-up').hide()
  $('.message').text('Wohoo! You are now signed up! Please log in to play.')
  $('.message').removeClass('fail')
  $('.message').addClass('success')
  $('input').val('')
}

const fail = function (response) {
  // if user cannot authenticate, display error message
  $('.message').text('Hmmm...that didnt go so well. Please try again.')
  $('.message').removeClass('fail')
  $('.message').addClass('fail')
  $('input').val('')
}

const signInSuccess = function (response) {
  // if user signs in successfully, show human or computer options
  $('#menu').show()
  $('#log-out').show()
  $('.signin-signup').hide()
  $('.front-page').hide()
  $('.choose-player').show()
  $('#sign-in-modal').modal('hide')
  $('.message').removeClass('fail')
  $('.message').text('')
  $('input').val('')
  store.user = response.user
  $('.welcome').html('<h1> Across The Universe </h1>')
  // console.log('auth, sign in', store.user)
  // console.log('auth, sign in', store.user.token)
}

const changePasswordSuccess = function (response) {
  // if user changes password show message that password has been updated
  $('.message').text('Your password has now been updated.')
  $('.message').removeClass('fail')
  $('.message').addClass('success')
  $('input').val('')
}

const logOutSuccess = function (response) {
  // if user logs out successfully go back to home menu
  $('.signin-signup').show()
  $('.front-page').show()
  $('#wins').empty()
  $('#lost').empty()
  $('.box').empty()
  $('.game-board').removeClass('computer')
  $('.game-board').removeClass('human')
  $('.welcome').show()
  $('.welcome').html('<h1>Welcome to Across The Universe</h1><h4> A travel themed tic tac toe game</h4>')
  $('.game-board').hide()
  $('.score').hide()
  $('#menu').hide()
  $('#log-out').hide()
  $('.comp-human').hide()
  $('.choose-player').hide()
  $('.refresh').hide()
}

const logOutFail = function (response) {
  // if user cannot log out, show error message
  $('.log-out').html('<p>Hmm, there was an error. well if you cant log out might as well keep playing</p>')
}

const chooseOpponent = function () {
  console.log('reaching ui')
  $('.comp-human').show()
  $('.game-board').removeClass('computer')
  $('.game-board').removeClass('human')
  $('.box').empty()
  $('.start-game').hide()
  $('.refresh').hide()
  $('.game-board').hide()
}

/*
const text = ['', '', '']
const elem = document.getElementById("changeText")

const funFacts = function () {
  const counter = 0
  for (let i = 0; i < config.fact.length; i++) {
    const fact = config.fact[counter]
    counter++
  }
  if (counter >= config.fact.length) {
    counter = 0
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
*/
module.exports = {
  signUpSuccess,
  fail,
  signInSuccess,
  logOutSuccess,
  changePasswordSuccess,
  logOutFail,
  chooseOpponent
}

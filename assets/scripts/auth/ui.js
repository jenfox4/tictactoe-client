// user interface changes for authentication process (i.e. sign in/sign out)
const store = require('./../store.js')

const signUpSuccess = function (response) {
  $('#sign-up').hide()
  // if user signed up successfully, display welcome message
  $('.message').text('Wohoo! You are now signed up! Please log in to play.')
  $('.message').removeClass('fail')
  $('.message').addClass('success')
}

const fail = function (response) {
  $('.message').text('Hmmm...that didnt go so well. Please try again.')
  $('.message').removeClass('fail')
  $('.message').addClass('fail')
}

const signInSuccess = function (response) {
  $('.signin-signup').hide()
  $('.comp-human').show()
  $('#sign-in-modal').modal('hide')
  store.user = response.user
  // console.log('auth, sign in', store.user)
  // console.log('auth, sign in', store.user.token)
}

const changePasswordSuccess = function (response) {
  $('.message').text('Your password has now been updated.')
  $('.message').removeClass('fail')
  $('.message').addClass('success')
}

const logOutSuccess = function (response) {
  $('.game-board').hide()
  $('.useroptions').hide()
  $('.signin-signup').show()
  $('.comp-human').hide()
}

const logOutFail = function (response) {
  $('.icons').html('<p>Hmm, there was an error. well if you cant log out might as well keep playing</p>')
}

module.exports = {
  signUpSuccess,
  fail,
  signInSuccess,
  logOutSuccess,
  changePasswordSuccess,
  logOutFail
}

// user interface changes for authentication process (i.e. sign in/sign out)

const signUpSuccess = function (response) {
  $('#sign-up').hide()
  // if user signed up successfully, display welcome message
  $('#message').text('Wohoo! You are now signed up! Please log in to play.')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const fail = function (response) {
  $('.message').text('Hmmm...that didnt go so well. Please try again.')
  $('.message').removeClass()
  $('.message').addClass('fail')
}

const signInSuccess = function (response) {
  $('.signin-signup').hide()
  $('.game-board').show()
  $('.useroptions').show()
  $('.modal-backdrop').hide()
}

module.exports = {
  signUpSuccess,
  fail,
  signInSuccess
}

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
}

const signInSuccess = function (response) {
  // if user signs in successfully, show human or computer options
  $('.signin-signup').hide()
  $('.comp-human').show()
  $('#sign-in-modal').modal('hide')
  $('.message').removeClass('fail')
  $('.message').text('')
  $('input').val('')
  store.user = response.user
  // console.log('auth, sign in', store.user)
  // console.log('auth, sign in', store.user.token)
}

const changePasswordSuccess = function (response) {
  // if user changes password show message that password has been updated
  $('.message').text('Your password has now been updated.')
  $('.message').removeClass('fail')
  $('.message').addClass('success')
  console.log($('#change-password').val(''))
  $('input').val('')
}

const logOutSuccess = function (response) {
  // if user logs out successfully go back to home menu
  $('.game-board').hide()
  $('.useroptions').hide()
  $('.signin-signup').show()
  $('.comp-human').hide()
  $('.past-games-list').empty()
  $('#wins').empty()
  $('.score').hide()
  console.log($('.box').html())
  $('.box').empty()
  $('.game-board').removeClass('computer')
  $('.game-board').removeClass('human')
}

const logOutFail = function (response) {
  // if user cannot log out, show error message
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

// user interface changes for authentication process (i.e. sign in/sign out)

const signUpSuccess = function (response) {
  $('#sign-up').hide()
  $('.modal-title').html('<h5>Welcome</h5>')
  $('.modal-body').html('<p>Please sign in to begin playing</p>')
}

const signUpFail = function (response) {
  $('#sign-up-title').text('fail')
}

module.exports = {
  signUpSuccess,
  signUpFail
}

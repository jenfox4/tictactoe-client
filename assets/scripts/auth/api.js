// api interactions with authentication process
const config = require('../config.js')
const store = require('../store.js')

// creates new user in api
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

module.exports = {
  signUp,
  signIn
}

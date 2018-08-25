// event handlers for authentication process (i.e. sign in/sign out)
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')
const config = require('./../config.js')

// function that retrieves from api and changes UI
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.fail)
}

// function that sends token for user authentication
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.fail)
}

// function when user logs out to show success in ui or fail
const logOut = function (event) {
  event.preventDefault()
  store.gameBoard = ['', '', '', '', '', '', '', '', '']
  const data = getFormFields(event.target)
  // console.log(data)
  api.logOut(data)
    .then(ui.logOutSuccess)
    .catch(ui.logOutFail)
}

// function when user changes password to show success or fail
const changePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.fail)
}

const onChangePlayerModal = function (event) {
  const iconPlayer = event.target.id
  $('.list').html('')
  let listOfWonders = ''
  for (const imgName in config.imgUrl) {
    const image = config.imgUrl[imgName]
    listOfWonders += `<p><span><img id="${config.iconNames[imgName]}" class="sm-icon ${iconPlayer}" src="${image}"  alt="world-wonder"></span>  ${config.iconNames[imgName]}</p>`
  }
  $('.list').append(listOfWonders)
}

const chooseOpponent = function () {
  ui.chooseOpponent()
}

module.exports = {
  onSignUp,
  onSignIn,
  logOut,
  changePassword,
  onChangePlayerModal,
  chooseOpponent
}

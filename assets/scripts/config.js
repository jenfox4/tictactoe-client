'use strict'

let apiUrl
const apiUrls = {
  production: 'https://aqueous-atoll-85096.herokuapp.com',
  development: 'https://tic-tac-toe-wdi.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const imgUrl = {
  player1: './public/images/png/big-ben.png',
  player2: './public/images/png/bridge.png',
  blueMosque: './public/images/png/blue-mosque.png',
  burj: './public/images/png/burj-al-arab.png',
  castle: './public/images/png/castle.png',
  stBasil: './public/images/png/cathedral-of-saint-basil.png',
  redeemer: './public/images/png/christ-the-redeemer.png',
  coliseum: './public/images/png/coliseum.png',
  eiffelTower: './public/images/png/eiffel-tower.png',
  buddha: './public/images/png/great-buddha-of-thailand.png',
  windmill: './public/images/png/kinderdijk-windmills.png',
  pisa: './public/images/png/leaning-tower-of-pisa.png',
  londonEye: './public/images/png/london-eye.png',
  moai: './public/images/png/moai.png',
  mountain: './public/images/png/mountain.png',
  parthenon: './public/images/png/parthenon.png',
  petra: './public/images/png/petra.png',
  pyramid: './public/images/png/pyramid.png',
  sphinx: './public/images/png/sphinx.png',
  liberty: './public/images/png/statue-of-liberty.png',
  stonehenge: './public/images/png/stonehenge.png',
  operaHouse: './public/images/png/sydney-opera-house.png',
  tajMahal: './public/images/png/taj-mahal.png'
}

const iconNames = {
  player1: 'The Big Ben',
  player2: 'Venice',
  blueMosque: 'The Blue Mosque',
  burj: 'The Burj Dubai',
  castle: 'Castle',
  stBasil: 'Cathedral of Saint Basil',
  redeemer: 'Christ The Redeemer',
  coliseum: 'The Coliseum',
  eiffelTower: 'The Eiffel Tower',
  buddha: 'Great Buddha of Thailand',
  windmill: 'Dutch Windmills',
  pisa: 'Leaning Tower of Pisa',
  londonEye: 'The London Eye',
  moai: 'Moai',
  mountain: 'Mountains',
  parthenon: 'Parthenon',
  petra: 'Petra',
  pyramid: 'The Pyramid',
  sphinx: 'The Sphinx',
  liberty: 'The Statue of Liberty',
  stonehenge: 'Stonehenge',
  operaHouse: 'Sydney Opera House',
  tajMahal: 'The Taj Mahal'
}

module.exports = {
  apiUrl,
  imgUrl,
  iconNames
}

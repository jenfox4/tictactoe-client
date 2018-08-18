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
  bigBen: './public/images/png/big-ben.png',
  blueMosque: './images/png/blue-mosque.png',
  bridge: './images/png/bridge.png',
  burj: './images/png/burj-al-arab.png',
  castle: './images/png/castle.png',
  stBasil: './images/png/cathedral-of-saint-basil.png',
  redeemer: './images/png/christ-the-redeemer.png',
  coliseum: './images/png/coliseum.png',
  eiffelTower: './images/png/eiffel-tower.png',
  buddha: './images/png/great-buddha-of-thailand.png',
  windmill: './images/png/kinderdijk-windmills.png',
  pisa: './images/png/leaning-tower-of-pisa.png',
  londonEye: './images/png/london-eye.png',
  moai: './images/png/moai.png',
  mountain: './images/png/mountain.png',
  parthenon: './images/png/parthenon.png',
  petra: './images/png/petra.png',
  pyramid: './images/png/pyramid.png',
  sphinx: './images/png/sphinx.png',
  liberty: './images/png/statue-of-liberty.png',
  stonehenge: './images/png/stonehenge.png',
  operaHouse: './images/png/sydney-opera-house.png',
  tajMahal: './images/png/taj-mahal.png'
}

const iconNames = {
  bigBen: 'The Big Ben',
  blueMosque: 'The Blue Mosque',
  bridge: 'Venice',
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

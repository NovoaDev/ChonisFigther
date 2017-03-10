var rdm = require('../util/RandomNumber')

function defense (Att, playerDef) {
  var attack = Att
  var shield = playerDef.shield
  var life = attack - shield
  return life
}

module.exports = defense

var rdm = require('../util/RandomNumber')

function defense (playerAtt, playerDef) {
  var attack = playerAtt.damage
  var shield = playerDef.shield
  var life = attack - shield
  return life
}

module.exports = defense

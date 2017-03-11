var rdm = require('../util/RandomNumber')

function defense (playerAtt, playerDef) {
  var attack = playerAtt.damage
  var shieldMin = playerDef.shield - 10
  var shieldMax = playerDef.shield + 20
  var shield = rdm(shieldMin, shieldMax)
  var life = attack - shield
   
  return {
    skill: playerAtt.skill,
    damage: life,
    state: playerAtt.state,
    turn: playerAtt.turn,
    mana: playerAtt.mana
  }
}

module.exports = defense

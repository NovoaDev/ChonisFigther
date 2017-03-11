var attackType = require('../ability/AttackType')
var defense = require('../ability/Defense')
 
function figth (playerAtt, playerDef) {
  var att = attackType(playerAtt)
  var def = defense(att, playerDef)
  
  return def
}

module.exports = figth

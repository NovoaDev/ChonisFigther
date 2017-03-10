var rdm = require('../util/RandomNumber')

function attack (player) {
  attPlayer = rdm(player.attMin, player.attMax)
  attWeapon = rdm(player.attWeaponMin, player.attWeaponMax)
  attFinal = attPlayer + attWeapon

  return attFinal
}

module.exports = attack

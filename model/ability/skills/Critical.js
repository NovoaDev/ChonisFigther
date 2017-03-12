var rdm = require('../../util/RandomNumber')

function critical (player) {
	dmg = rdm(player.attMin, player.attMax)
	dmgWeapon = rdm (player.attWeaponMin, player.attWeaponMax)
  dmgFinal = (dmg + dmgWeapon) * 2

  return {
    skill: 'Critical',
	  damage: dmgFinal,
	  state: 'Not',
	  turn: 0,
	  mana: 15
  }
}

module.exports = critical

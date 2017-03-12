var rdm = require('../../util/RandomNumber')

function bash (player) {
	dmg = rdm(player.attMin, player.attMax)
	dmgWeapon = rdm (player.attWeaponMin, player.attWeaponMax)
  dmgFinal = (dmg + dmgWeapon) + 10

  return {
    skill: 'Bash',
	  damage: dmgFinal,
	  state: 'Bash',
	  turn: 1,
	  mana: 0,
	  type: 'att'
  }
}

module.exports = bash

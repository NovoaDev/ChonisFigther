function critical (player) {
  dmgFinal = (player.attMax + player.attWeaponMax) * 2

  return {
    skill: 'Critical',
	  damage: dmgFinal,
	  state: 'Not',
	  turn: 0,
	  mana: 15
  }
}

module.exports = critical

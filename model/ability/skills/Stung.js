function stung (player) {
  dmgFinal = (player.attMax + player.attWeaponMax) + 50

  return {
    skill: 'Stung',
	  damage: dmgFinal,
	  state: 'Stung',
	  turn: 2,
	  mana: 25
  }
}

module.exports = stung
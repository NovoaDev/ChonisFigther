function copy (c) {
  return {
	  skill: c.skill,
	  damage: c.damage,
	  state: c.state,
	  turn: c.turn,
	  mana: c.mana
	  }
}

module.exports = copy

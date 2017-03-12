var rdm = require('../../util/RandomNumber')

function berserk () {

	
	life = rdm(400, 800)

  return {
    skill: 'Berserk',
	  damage: life,
	  state: 'Not',
	  turn: 0,
	  mana: 0,
	  type: 'def'
  }
}

module.exports = berserk
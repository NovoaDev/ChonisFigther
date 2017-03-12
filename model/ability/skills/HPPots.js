var rdm = require('../../util/RandomNumber')

function HPPots () {
	life = rdm(200, 500)

  return {
    skill: 'HP Potion',
	  damage: life,
	  state: 'Not',
	  turn: 1,
	  mana: 0,
	  type: 'def'
  }
}

module.exports = HPPots
var rdm = require('../../util/RandomNumber')

function HPLion () {
	life = rdm(400, 800)

  return {
    skill: 'HP Lion',
	  damage: life,
	  state: 'Not',
	  turn: 0,
	  mana: 0,
	  type: 'def'
  }
}

module.exports = HPLion
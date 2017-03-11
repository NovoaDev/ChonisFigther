function selectorSkill (player, skillPj) {
  var skill = require('./skills/' + skillPj + '.js')
  var useSkill = skill(player)
  
  return {
  	skill: useSkill.skill,
  	damage: useSkill.damage,
  	state: useSkill.state,
	  turn: useSkill.turn,
	  mana: useSkill.mana
  }
}

module.exports = selectorSkill

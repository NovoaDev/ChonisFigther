var rdm = require('../util/RandomNumber')
var copy = require ('../util/copyJson')
var selectorSkill = require('./SelectorSkill')

function attackType (player) {
	var sk1 = selectorSkill(player, player.skill1)
  var sk2 = selectorSkill(player, player.skill2)
  var sk3 = selectorSkill(player, player.skill3)
	var skilldisable = true
  var attPlayer = rdm(player.attMin, player.attMax)
  var attWeapon = rdm(player.attWeaponMin, player.attWeaponMax)
  var attFinal = attPlayer + attWeapon
  var aux
    
  if (player.mana > sk1.mana || player.mana > sk2.mana || player.mana > sk3.mana ) {
    var num = rdm(0, 10)
    if (num == 1) {
    	skilldisable = false
	    while (aux == undefined) {
	    	var ite = rdm(1, 3)
	      if (player.mana > sk1.mana && ite == 1) {
	        aux = copy(sk1)
	      } else if (player.mana > sk2.mana && ite == 2) {
	        aux = copy(sk2)
	      } else if (player.mana > sk3.mana && ite == 3) {
	        aux = copy(sk3)
	      }
	    }
  	}
  }

  if (skilldisable) {   
    aux = {
      skill: "Attack",
      damage: attFinal,
      state: 'Not',
      turn: 0,
      mana: 0,
      type: 'att' 
    }
  }

  return {
    skill: aux.skill,
    damage: aux.damage,
    state: aux.state,
    turn: aux.turn,
    mana: aux.mana,
    type: aux.type
  }
}

module.exports = attackType

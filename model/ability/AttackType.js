var attack = require('./Attack')

function attackType (player, probability) {
	var result
	var att

	probaIsTrue = false

  if (probaIsTrue) {
    att = attack(player)
	  type = "skill"
  } else {
	  att = attack(player)
	  type = "Attack"
  }

  result = {
		type: type,
  	att: att
  }

  console.log(result.damage + ' result')
  return result
}

module.exports = attackType

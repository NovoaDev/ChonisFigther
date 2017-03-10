var attack = require('./Attack')

var result
probaIsTrue = false

function attackType (player) {

  var att = attack(player)

  if (probaIsTrue) {
    console.log("SKILLS")
  } else {
	  result = att
  }

  console.log(result.damage + ' result')
  return result
}

module.exports = attackType

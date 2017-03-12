var rdm = require('../util/RandomNumber')

function generateSkills (totalPts, skill) {
  var skill1 = ''
  var skill2 = ''
  var skill3 = ''
  var skillaux = ''
  var skillHard = skill.skillHard
  var skillMed = skill.skillMed
  var skillSoft = skill.skillSoft
  var seleccionSkills

  if (totalPts < 9) {
    seleccionSkills = skillHard
  } else if (totalPts >= 10 && totalPts < 20) {
    seleccionSkills = skillMed
  } else {
    seleccionSkills = skillSoft
  }
  var y = 0
  do {
    skillAux = seleccionSkills[rdm(0, seleccionSkills.length - 1)]
	 	if (skillAux != 'undefined') {
      if (skillAux != skill1 && skillAux != skill2) {
        if (skill1 == '') {
		      skill1 = skillAux
		      y++
	  	  } else if (skill2 == '') {
	  	    skill2 = skillAux
		      y++
	  	  } else if (skill3 == '') {
	  	    skill3 = skillAux
		      y++
	  	  }
      }
    }
  } while (y < 3)

  return {
	  skill1: skill1,
	  skill2: skill2,
	  skill3: skill3
  }
}

module.exports = generateSkills

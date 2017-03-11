function SkillType () {

	var skillHard = [ 'Critical', 'Critical', 'Critical', 'Critical' ]
	// 'Tumbar Arma', 'Lanzar Red', 'Stung', 'Evasion', 'Critical', 'Mascota']

	var skillMed = [ 'Critical', 'Critical', 'Critical', 'Critical' ]
	// 'Golpetazo',
	// 'Lanzar red',
	// 'Stung',
	// 'Lanzar Arma',
	// 'Tumbar Arma',
	// 'Pot de HP',
	// 'Bomba de Confusion']

	var skillSoft = [ 'Critical', 'Critical', 'Critical', 'Critical' ]
	// 'Golpetazo',
	// 'Leon HP',
	// 'Bersek',
	// 'Lanzar Arma',
	// 'Tumbar Arma',
	// 'Pot HP',
	// 'Confusion'];

  return {
    skillHard: skillHard,
    skillMed: skillMed,
    skillSoft: skillSoft
  }
}

module.exports = SkillType

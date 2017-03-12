function SkillType () { 

	var skillHard = [ 'Stung', 'FishingNet', 'Critical', 'Stung' ]
	// 'Tumbar Arma', 'Lanzar Red', 'Stung', 'Evasion', 'Critical', 'Mascota']

	var skillMed = [ 'Stung', 'FishingNet', 'Critical', 'Stung' ]
	// 'Golpetazo',
	// 'Lanzar red',
	// 'Stung',
	// 'Lanzar Arma',
	// 'Tumbar Arma',
	// 'Pot de HP',
	// 'Bomba de Confusion']

	var skillSoft = [ 'Stung', 'FishingNet', 'Critical', 'Stung' ]
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

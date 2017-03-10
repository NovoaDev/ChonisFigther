var rdm = require('../util/RandomNumber')

function buildStats () {
  var strench = rdm(1, 9)
  var agility = rdm(1, 9)
  var vitality = rdm(1, 9)
  var energy = rdm(1, 9)
  var totalPts = (strench + agility + vitality + energy)

  return {
    strench: strench,
    agility: agility,
    vitality: vitality,
    energy: energy,
    totalPts: totalPts
  }
}

module.exports = buildStats

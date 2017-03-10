var rdm = require('../util/RandomNumber')

function figthStats (stats) {
  var strench = stats.strench
  var agility = stats.agility
  var vitality = stats.vitality
  var energy = stats.energy

  var attMin = 100
  var attMax = 150
  var shield = 10
  var life = 500
  var mana = 100

  var x
  for (x = 0; x != strench; x++) {
    attMin += rdm(0, 10)
    attMax += rdm(0, 10)
    life += rdm(0, 5)
  }

  for (x = 0; x != agility; x++) {
    shield += rdm(0, 10)
  }

  for (x = 0; x != vitality; x++) {
    life += rdm(20, 70)
  }

  for (x = 0; x != energy; x++) {
    mana += rdm(10, 20)
  }

  return {
    attMin: attMin,
    attMax: attMax,
    shield: shield,
    life: life,
    mana: mana
  }
}

module.exports = figthStats

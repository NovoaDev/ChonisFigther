function buildPlayer (name) {
  var playerModel = require('./Player')
  var generateBasicStats = require('./GenerateBasicStats')
  var generateFigthStats = require('./GenerateFigthStats')
  var generateSkills = require('./GenerateSkills')
  var skillsType = require('./SkillsType')

  var type = skillsType()
  var stats = generateBasicStats()
  var figth = generateFigthStats(stats)
  var skill = generateSkills(stats.totalPts, type)

  var player = new playerModel(name)
  player.setBasicStats(stats)
  player.setFigthStats(figth)
  player.setSkills(skill)

  return player
}

module.exports = buildPlayer

function cpuPlayer () {
  var buildPlayer = require('../generateplayer/BuildPlayer')
  var cpu = buildPlayer('CPU')
  return cpu
}
module.exports = cpuPlayer

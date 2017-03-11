var rdm = require('../util/RandomNumber')
var player1 = require('./Player1')
var cpuPlayer = require('./CpuPlayer')
var checkTurn = require('./CheckTurn')
var figth = require('./Figth')

function gameLoop () {
  var turn = rdm(0, 1)
  var game = true 


  // p0r no pasar db
  //
  var buildPlayer = require('../generateplayer/BuildPlayer')
  playerImport = buildPlayer('lola')
  //
  //

  player = new player1(playerImport)
  cpu = new cpuPlayer('cpu')

  while (game) {
	  if (player.life > 0 && cpu.life > 0) {
      if (turn == 0) {
        if (checkTurn(player)) {				  
          result = figth(player, cpu)
          updatePlayer(result)
          player.state = 'Normal'
        } else {
          player.turn++
        }
        turn = 1
        } else {
          if (checkTurn(cpu)) {
				    result = figth(cpu, player)
				    updateCpu(result)
            cpu.state = 'Normal'
          } else {
          cpu.turn++
        }
        turn = 0
      }
    } else {
      if (player.life > 0) {
        
        console.log('Player Win')
      } else {
        console.log('Cpu Win')
      }
      game = false
    }
  }

  function updatePlayer (result) {
    cpu.life -= result.damage
    console.log('Player1 use : ' + result.skill  + ' Dmg : ' + result.damage + '')
    console.log('--------------------------')
  }

  function updateCpu (result) {
    player.life -= result.damage
    console.log('Cpu use : ' + result.skill + ' Dmg : ' + result.damage + '')
    console.log('--------------------------')
  }

}

module.exports = gameLoop

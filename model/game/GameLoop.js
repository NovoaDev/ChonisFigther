var rdm = require('../util/RandomNumber')
var player1 = require('./Player1')
var cpuPlayer = require('./CpuPlayer')
var checkTurn = require('./CheckTurn')
var figth = require('./Figth')
var checkStatus = require('./checkStatus')

function gameLoop () {
  var turn = rdm(0, 1)
  var game = true 
  var result

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
          status = checkStatus(cpu, result)
          updatePlayer(result, status)
        }
        turn = 1
        } else {
          if (checkTurn(cpu)) {
            result = figth(cpu, player)
            status = checkStatus(player, result)
				    updateCpu(result, status)
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

  function updatePlayer (result, turn) {
    cpu.life -= result.damage
    cpu.state = turn.state
    cpu.turn = turn.turn
    console.log('Player1 use : ' + result.skill  + ' Dmg : ' + result.damage + '')
    console.log('--------------------------')
  }

  function updateCpu (result, turn) {
    player.life -= result.damage
    player.state = turn.state
    player.turn = turn.turn
    console.log('Cpu use : ' + result.skill + ' Dmg : ' + result.damage + '')
    console.log('--------------------------')
  }

  function viewStats () {
    console.log(' -== Player ==- ')
    console.log('   -= Stats =-  ')
    console.log('Life : ' + player.life + ' Points')
    console.log('State : ' + player.state + ' Delay : ' + player.turn)
    console.log('Mana : ' + player.mana + ' Points')
    console.log('--------------------------')
    console.log(' -== Cpu ==- ')
    console.log('   -= Stats =-  ')
    console.log('Life : ' + cpu.life + ' Points')
    console.log('State : ' + cpu.state + ' Delay : ' + cpu.turn)
    console.log('Mana : ' + cpu.mana + ' Points')
    console.log('--------------------------')
  }
}

module.exports = gameLoop

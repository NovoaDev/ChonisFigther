var rdm = require('../util/RandomNumber')
var turn = rdm(0, 1)
var game = true 
var player1 = require('./Player1')
var cpuPlayer = require('./CpuPlayer')

var checkTurn = require('./CheckTurn')
var figth = require('./Figth')


// p0r no pasar db
//
var buildPlayer = require('../generateplayer/BuildPlayer')
playerImport = buildPlayer('lola')
//
//

player = new player1(playerImport)
cpu = new cpuPlayer()

function gameLoop () {
  while (game) {
	  if (player.life > 0 && cpu.life > 0) {
    viewStats()
    if (turn == 0) {
      if (checkTurn(player.turn)) {
				  result = figth(player, cpu)
				  updatePlayer(result)
        player.state = 'Normal'
      } else {
        player.turn++
      }
      turn = 1
    } else {
      console.log(checkTurn(cpu.turn))
      if (checkTurn(cpu.turn)) {
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
}

function updatePlayer (result) {
  cpu.life -= result.damage
  cpu.state = result.state
  cpu.turn -= result.turn
  player.mana -= result.mana
  console.log('Player1 use : ' + result.skill + ' Dmg : ' + result.damage + '')
  console.log('--------------------------')
}

function updateCpu (result) {
  player.life -= result.damage
  player.state = result.state
  player.turn -= result.turn
  cpu.mana -= result.mana
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

module.exports = gameLoop

function updateStatus (player, attUpdate) {
  var turn
  var state

  if (attUpdate.state == 'Not') {
  	if (player.turn > 0) {
  		turn = player.turn - 1
      console.log("turno mayor a 0 " + turn)
  	} else {
      turn = player.turn
      console.log("turno igual a 0 " + turn)
    }
  } else {
  	turn = player.turn + attUpdate.turn
    console.log("turno con skill " + turn)
  } 
  
  if (turn == 0) {
  	state = 'normal'
  } else {
  	state = attUpdate.state
  }
  return {
		state: state,
		turn: turn
	}
}

module.exports = updateStatus

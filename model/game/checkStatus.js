function updateStatus (player, attUpdate) {
  var turn
  var state

  if (attUpdate.state == 'Not') {
  	if (player.turn > 0) {
  		turn = player.turn - 1
      state = player.state
  	} else {
      turn = player.turn
      state = 'normal'
    }
  } else {
  	turn = player.turn + attUpdate.turn
    state = attUpdate.state
  } 
  
  return {
		state: state,
		turn: turn
	}
}

module.exports = updateStatus

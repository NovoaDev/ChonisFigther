function checkTurn (player) {
  console.log(player.name + ' turn ')
  var resultturn
  if (player.turn == 0) {
    resultturn = true
  } else {
  	resultturn = false
  	console.log(player.name + ' ' + player.state)
  } 
  
  return resultturn
}

module.exports = checkTurn

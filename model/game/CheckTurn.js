var resultturn

function checkTurn (player) {
  console.log(player.name + ' turn ')
  if (player.turn == 0) {
    resultturn = true
  } else {
  	resultturn = false
  } 
  
  return resultturn
}

module.exports = checkTurn

function random (min, max) {
  var number = Math.floor((Math.random() * (max - min + 1)) + min)
  return number
}

module.exports = random

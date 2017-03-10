var Player = function (name) {
  this.name = name

  this.strench = 0
  this.agility = 0
  this.vitality = 0
  this.energy = 0

  this.attMin = 0
  this.attMax = 0
  this.shield = 0
  this.life = 0
  this.mana = 0

  this.weaponOn = false
  this.attWeaponMin = 0
  this.attWeaponMax = 0
  this.weaponType = null

  this.skill1 = ''
  this.skill2 = ''
  this.skill3 = ''

  this.turn = 0
  this.state = 'normal'

  this.inventory = []
}

Player.prototype.setBasicStats = function (stats) {
  this.strench = stats.strench
  this.agility = stats.agility
  this.vitality = stats.vitality
  this.energy = stats.energy
}

Player.prototype.setFigthStats = function (stats) {
  this.attMin = stats.attMin
  this.attMax = stats.attMax
  this.shield = stats.shield
  this.life = stats.life
  this.mana = stats.mana
}

Player.prototype.setWeapon = function (stats) {
  this.weaponOn = true
  this.attWeaponMin = stats.attWeaponMin
  this.attWeaponMax = stats.attWeaponMax
  this.weaponType = stats.weaponType
}

Player.prototype.setSkills = function (stats) {
  this.skill1 = stats.skill1
  this.skill2 = stats.skill2
  this.skill3 = stats.skill3
}

module.exports = Player

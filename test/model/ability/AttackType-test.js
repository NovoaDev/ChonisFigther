var assert = require('assert')
var attack = require('../../../model/game/AttackType')
var Player = {
  attMin: 10,
  attMax: 11,
  attWeaponMin: 100,
  attWeaponMax: 110
}  
var result = attack(Player)

describe('Attack File Test', function () {
  it('Attack file typeof = function', function () {
    assert.equal(typeof attack, 'function')
  })
  it('Return attack 110-122 && typeof = number', function () {
    assert.equal(result > 109 && result < 123 && typeof result === 'number', true)
  })
})

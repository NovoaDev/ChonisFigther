var assert = require('assert')
var Player1 = require('../../../model/game/Player1')
var Player = {
  attMin: 10,
  attMax: 11,
  attWeaponMin: 100,
  attWeaponMax: 110
}
var result = Player1(Player)

describe('Player1 File Test', function () {
  it('Player1 file typeof = function', function () {
    assert.equal(typeof Player1, 'function')
  })
  it('Return equal Player 0bj', function () {
    assert.equal(result === Player, true)
  })
})

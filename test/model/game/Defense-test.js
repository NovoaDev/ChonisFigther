var assert = require('assert')
var defense = require('../../../model/game/Defense')
var playerAtt = 100
var playerDef = {
  shield: 30
}
var result = defense(playerAtt, playerDef)

describe('Defense File Test', function () {
  it('Defense file typeof = function', function () {
    assert.equal(typeof defense, 'function')
  })
  it('Return Defense 70 && typeof = number', function () {
    assert.equal(result == 70 && typeof result === 'number', true)
  })
})

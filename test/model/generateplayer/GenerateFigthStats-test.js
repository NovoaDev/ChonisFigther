var assert = require('assert')
var FigthStats = require('../../../model/generateplayer/GenerateFigthStats')
var stats = {
  strench: 9,
  agility: 9,
  vitality: 9,
  energy: 9
}
var result = FigthStats(stats)

describe('GenerateBasicStats file', function () {
  it('BuildStats exist && typeof function', function () {
    assert.equal(typeof FigthStats, 'function')
  })
  it('Return attMin 1-999 && typeof = number)', function () {
    assert.equal(result.attMin > 0 && result.attMin < 1000 && typeof result.attMin === 'number', true)
  })
  it('Return attMax 1-999 && typeof = number)', function () {
    assert.equal(result.attMax > 0 && result.attMax < 1000 && typeof result.attMax === 'number', true)
  })
  it('Return shield 1-999 && typeof = number)', function () {
    assert.equal(result.shield > 0 && result.shield < 1000 && typeof result.shield === 'number', true)
  })
  it('Return life 1-1500 && typeof = number)', function () {
    assert.equal(result.life > 0 && result.life < 1500 && typeof result.life === 'number', true)
  })
  it('Return mana 1-999 && typeof = number)', function () {
    assert.equal(result.mana > 0 && result.mana < 1000 && typeof result.mana === 'number', true)
  })
})

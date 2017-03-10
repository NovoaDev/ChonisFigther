var assert = require('assert')
var buildStats = require('../../../model/generateplayer/GenerateBasicStats')
var result = buildStats()

describe('GenerateBasicStats file', function () {
  it('BuildStats exist && typeof function', function () {
    assert.equal(typeof buildStats, 'function')
  })
  it('Return strench 1-9 && typeof = number', function () {
    assert.equal(result.strench > 0 && result.strench < 10 && typeof result.strench === 'number', true)
  })
  it('Return agility 1-9 && typeof = number', function () {
    assert.equal(result.agility > 0 && result.agility < 10 && typeof result.agility === 'number', true)
  })
  it('Return vitality 1-9 && typeof = number', function () {
    assert.equal(result.vitality > 0 && result.vitality < 10 && typeof result.vitality === 'number', true)
  })
  it('Return energy 1-9 && typeof = number', function () {
    assert.equal(result.energy > 0 && result.energy < 10 && typeof result.energy === 'number', true)
  })
  it('Return totalPts 1-36 && typeof = number', function () {
    assert.equal(result.totalPts > 0 && result.totalPts < 37 && typeof result.totalPts === 'number', true)
  })
})

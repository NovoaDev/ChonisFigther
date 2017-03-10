var assert = require('assert')
var cpuPlayer = require('../../../model/game/CpuPlayer')
var result = cpuPlayer()

describe('cpuPlayer File Test', function () {
  it('CpuPlayer file typeof = function', function () {
    assert.equal(typeof cpuPlayer, 'function')
  })
  it('cpuPlayer Return 0bj', function () {
    assert.equal(typeof result, 'object')
  })
})

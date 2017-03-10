var assert = require('assert')
var player = require('../../../model/generateplayer/Player')
var pj = new player('lola')

describe('Player File Test', function () {
  it('Player file typeof = function', function () {
    assert.equal(typeof player, 'function')
  })
  it('.setBasicStats Exist && typeof = function', function () {
    assert.equal(typeof pj.setBasicStats, 'function')
  })
  it('.setFigthStats Exist && typeof = function', function () {
    assert.equal(typeof pj.setFigthStats, 'function')
  })
  it('.setWeapon Exist && typeof = function', function () {
    assert.equal(typeof pj.setWeapon, 'function')
  })
  it('.setSkills Exist && typeof = function', function () {
    assert.equal(typeof pj.setSkills, 'function')
  })
  it('.setCombatLife Exist && typeof = function', function () {
    assert.equal(typeof pj.setCombatLife, 'function')
  })
})

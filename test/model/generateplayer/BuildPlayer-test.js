var assert = require('assert')
var buildPlayer = require('../../../model/generateplayer/BuildPlayer')
var result = buildPlayer('lola')

describe('BuildPlayer file', function () {
  it('buildPlayer exist && typeof function', function () {
    assert.equal(typeof buildPlayer, 'function')
  })
  it('name equal "lola"', function () {
    assert.equal(result.name, 'lola')
  })
  it('strench 1-9 && typeof = number', function () {
    assert.equal(result.strench > 0 && result.strench < 10 && typeof result.strench === 'number', true)
  })
  it('agility 1-9 && typeof = number', function () {
    assert.equal(result.agility > 0 && result.agility < 10 && typeof result.agility === 'number', true)
  })
  it('vitality 1-9 && typeof = number', function () {
    assert.equal(result.vitality > 0 && result.vitality < 10 && typeof result.vitality === 'number', true)
  })
  it('energy 1-9 && typeof = number', function () {
    assert.equal(result.energy > 0 && result.energy < 10 && typeof result.energy === 'number', true)
  })
  it('attMin 1-999 && typeof = number)', function () {
    assert.equal(result.attMin > 0 && result.attMin < 1000 && typeof result.attMin === 'number', true)
  })
  it('attMax 1-999 && typeof = number)', function () {
    assert.equal(result.attMax > 0 && result.attMax < 1000 && typeof result.attMax === 'number', true)
  })
  it('shield 1-999 && typeof = number)', function () {
    assert.equal(result.shield > 0 && result.shield < 1000 && typeof result.shield === 'number', true)
  })
  it('life 1-1500 && typeof = number)', function () {
    assert.equal(result.life > 0 && result.life < 1500 && typeof result.life === 'number', true)
  })
  it('mana 1-999 && typeof = number)', function () {
    assert.equal(result.mana > 0 && result.mana < 1000 && typeof result.mana === 'number', true)
  })
  it("Skill1 Should be String && != ''.!", function () {
    assert.equal(typeof result.skill1 === 'string' && result.skill1 != '', true)
  })
  it("Skill2 Should be String && != ''.!", function () {
    assert.equal(typeof result.skill2 === 'string' && result.skill2 != '', true)
  })
  it("Skill3 Should be String && != ''.!", function () {
    assert.equal(typeof result.skill3 === 'string' && result.skill3 != '', true)
  })
})

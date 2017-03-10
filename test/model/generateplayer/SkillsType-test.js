var assert = require('assert')
var SkillsType = require('../../../model/generateplayer/SkillsType')
var result = SkillsType()

describe('SkillsType', function () {
  it('SkillsType exist && typeof function', function () {
    assert.equal(typeof SkillsType, 'function')
  })
  it('Skill1 typeof Object-Arry.!', function () {
    assert.equal(typeof result.skillHard === 'object', true)
  })
  it('Skill1[1] Return Should be String.!', function () {
    assert.equal(typeof result.skillHard[1] === 'string', true)
  })
  it('Skill2 typeof Object-Arry.!', function () {
    assert.equal(typeof result.skillMed === 'object', true)
  })
  it('Skill2[1] Return Should be String.!', function () {
    assert.equal(typeof result.skillMed[1] === 'string', true)
  })
  it('Skill3 typeof Object-Arry.!', function () {
    assert.equal(typeof result.skillSoft === 'object', true)
  })
  it('Skill3[1] Return Should be String.!', function () {
    assert.equal(typeof result.skillSoft[1] === 'string', true)
  })
})

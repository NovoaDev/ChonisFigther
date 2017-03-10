var assert = require('assert')
var generateSkills = require('../../../model/generateplayer/GenerateSkills')
var rdm = require('../../../model/util/RandomNumber')
var stats = {
  skillHard: ['a', 'b', 'c', 'd', 'e'],
  skillMed: ['b', 'c', 'd', 'e', 'f'],
  skillSoft: ['c', 'd', 'e', 'f', 'g']
}

var result = generateSkills(rdm(1, 35), stats)

describe('Generate Skills', function () {
  it('GenerateSkills exist && typeof function', function () {
    assert.equal(typeof generateSkills, 'function')
  })
  it("Skill1 Return Should be String && != ''.!", function () {
    assert.equal(typeof result.skill1 === 'string' && result.skill1 != '', true)
  })
  it("Skill2 Return Should be String && != ''.!", function () {
    assert.equal(typeof result.skill2 === 'string' && result.skill2 != '', true)
  })
  it("Skill3 Return Should be String && != ''.!", function () {
    assert.equal(typeof result.skill3 === 'string' && result.skill3 != '', true)
  })
})

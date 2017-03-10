var assert = require('assert')
var rdm = require('../../../model/util/RandomNumber')

describe('Generate Random Number!', function () {
  it('Generate Random Number!', function () {
    var number = rdm(4, 7)
    assert.equal(number < 8 && number > 3, true)
  })
})

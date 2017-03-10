var assert = require('assert')
var crypto = require('../../../model/util/Crypto')

describe('Crypto Test', function () {
  it('Crypto return CryptoPass', function () {
    assert.equal(crypto('lol'), '07123e1f482356c415f684407a3b8723e10b2cbbc0b8fcd6282c49d37c9c1abc')
  })
})

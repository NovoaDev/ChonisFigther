var assert = require('assert')
var crypto = require('../../../model/util/Crypto')
var config = require('../../../model/util/Cfg').key

describe('CFG File Variables.!', function () {
  it('Mysql Host', function () {
    assert.equal(crypto(config.servSQL), '49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d9763')
  })
  it('Mysql DB', function () {
    assert.equal(crypto(config.dbSQL), '428821350e9691491f616b754cd8315fb86d797ab35d843479e732ef90665324')
  })
  it('Mysql User', function () {
    assert.equal(crypto(config.usuSQL), '4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2')
  })
  it('Mysql Pass', function () {
    assert.equal(config.passSQL, '')
  })
})

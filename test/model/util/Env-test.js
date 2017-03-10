var assert = require('assert')
var crypto = require('../../../model/util/Crypto')

describe('System ENV.!', function () {
  it('ENV Mysql Host', function () {
    assert.equal(crypto(process.env.CF_SERV_SQL), '49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d9763')
  })
  it('ENV Mysql DB', function () {
    assert.equal(crypto(process.env.CF_DB_SQL), '428821350e9691491f616b754cd8315fb86d797ab35d843479e732ef90665324')
  })
  it('ENV Mysql User', function () {
    assert.equal(crypto(process.env.CF_USU_SQL), '4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2')
  })
  it('ENV Mysql Pass', function () {
    assert.equal(process.env.CF_PASS_SQL, '')
  })
})

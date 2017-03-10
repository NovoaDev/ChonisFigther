var express = require('express')
var web = express.Router()
var parser = require('body-parser')

web.use(parser.urlencoded({extended: true}))

var buildPj = require('../model/generateplayer/BuildPlayer')

web.get('/', function (req, res) {
  res.sendfile('view/buildpj/index.html')
})

web.get('/login', function (req, res) {
  res.sendfile('view/login/index.html')
})

web.post('/buildpj', function (req, res) {

  var name = req.body.name
  
  var pj = buildPj(name)
  res.json(pj)
  
})

web.post('/', function (req, res) {

  var name = req.body.name
  
  var pj = buildPj(name)
  res.json(pj)
  
})


module.exports = web

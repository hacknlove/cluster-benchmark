'use strict'
const bodyParser = require('body-parser')
const express = require('express')
const compression = require('compression')

module.exports = function (server = {}, port = 8080, ip = '127.0.0.1') {
  server.app = express()
  server.app.enable('trust proxy')
  server.app.use(compression())
  server.app.use(bodyParser.json())
  server.app.use(bodyParser.raw())
  server.app.use(bodyParser.text())
  return server
}

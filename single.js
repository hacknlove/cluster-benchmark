'use strict'
const http = require('http')

const express = require('./express')
const controller = require('./controller')

const server = express()
controller(server)

server.server = http.createServer(server.app)
server.server.listen(process.env.PORT || 8080, process.env.IP || '0.0.0.0')

console.log('escuchando en ', process.env.PORT || 8080, process.env.IP || '0.0.0.0')

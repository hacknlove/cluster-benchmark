import test from 'ava'
import controller from '../controller'
import express from '../express'
import request from 'supertest'

test('tla return a three letter acronym', function (t) {
  t.plan(100)
  for (let i = 100; i--;) {
    t.assert(controller.tla().match(/^[a-z]{3}$/))
  }
})

test('GET / returns first TLA google result', async function (t) {
  const server = express()

  controller(server)

  const res = await request(server.app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)

  t.assert(res.body.tla.match(/^[a-z]{3}$/))
  t.assert(typeof res.body.definition === 'string')
})

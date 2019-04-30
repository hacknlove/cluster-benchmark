import test from 'ava'
import express from '../express'
import request from 'supertest'

test('express is a function', t => {
  t.is(typeof express, 'function')
})

test('express running', async function (t) {
  const server = express()

  server.app.get('/test', (req, res, next) => {
    res.status(200)
    return res.json({
      ok: true
    })
  })

  const res = await request(server.app)
    .get('/test')
    .expect(200)
    .expect('Content-Type', /json/)

  t.deepEqual(res.body, {
    ok: true
  })
})

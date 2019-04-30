const superagent = require('superagent')
const cheerio = require('cheerio')

const tla = function tla () {
  return Math.random().toString(36).replace(/[0-9.]/g, '').substr(0, 3)
}

const raiz = async function raiz (req, res) {
  const q = tla()
  const r = await superagent
    .get(`https://www.google.com/search?q=${q}`)

  const $ = cheerio.load(r.text)

  res.json({
    tla: q,
    definition: $('#ires h3').first().text()
  })
}

module.exports = function (server) {
  const app = server.app
  app.get('/', raiz)
}

if (process.env.NODE_ENV === 'test') {
  module.exports.raiz = raiz
  module.exports.tla = tla
}

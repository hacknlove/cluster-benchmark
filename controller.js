const fs = require('fs')

const packagejson = function packagejson (req, res) {
  fs.createReadStream('./package-lock.json').pipe(res)
}

const timestamp = function timestamp (req, res) {
  res.json({
    timestamp: Date.now()
  })
}

module.exports = function (server) {
  const app = server.app
  app.get('/package', packagejson)

  app.get('/timestamp', timestamp)
}

if (process.env.NODE_ENV === 'test') {
  module.exports.packagejson = packagejson
  module.exports.timestamp = timestamp
}

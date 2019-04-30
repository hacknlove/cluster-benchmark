'use strict'
const cluster = require('cluster')

const numCPUs = process.env.CPUS || 8

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`)

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
  })
} else {
  require('./single.js')
  console.log(`Worker ${process.pid} started`)
}

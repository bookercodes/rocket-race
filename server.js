const game = {
  start () {
  }
}

const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 8000
})

server.route({
  method: 'POST',
  path:'/game',
  handler: function (request, reply) {
    return reply('hello world')
  }
})

server.start(err => {
  if (err) {
    throw err
  }
  console.log('Server running at:', server.info.uri)
})
game.start()

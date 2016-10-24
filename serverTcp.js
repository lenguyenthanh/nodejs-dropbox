const net = require('net')
const jsonSocket = require('json-socket')

const SERVER_PORT = 8001
const server = net.createServer()

server.listen(SERVER_PORT)
server.on('connection', (socket) => {
      
})

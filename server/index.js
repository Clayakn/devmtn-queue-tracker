const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')
const websocket = io(server)

const S_PORT = 4000
websocket.listen(S_PORT)
console.log(`Sockets are listening on port ${S_PORT}`)

const R_PORT = 4001
app.listen(R_PORT, () => console.log(`REST is listening on port ${R_PORT}`))

websocket.on('connection', (socket) => {
    console.log('A client just joined on ', socket.id)
    socket.on('this', (data) => {
        websocket.emit(data)
    })
    socket.on('greeting', (data) => {
        console.log('The frontend says:', data)
    })
})

app.get('/api/greeting', (req, res) => res.status(200).send('Hi there RESTful caller!'))


function _sendAndSaveMessage(message, socket, fromServer) {
    var emitter = fromServer ? websocket : socket.broadcast;
    emitter.emit('message', [message]);
}

var stdin = process.openStdin();
stdin.addListener('data', function(d) {
    _sendAndSaveMessage({
    text: d.toString().trim(),
    createdAt: new Date(),
    user: { id: 'awesomesauce' }
  }, null /* no socket */, true /* send from server */);
});
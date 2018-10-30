const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.Server(app)
const websocket = socketio(server)
const PORT = 3000
server.listen(PORT, () => console.log(`Port is listening on ${PORT}`))

const messages = []

websocket.on('connection', (socket) => {
    console.log('A client just joined on ', socket.id)
})

websocket.on('message', (message) => {
    messages.push(message)
    socket.broadcast.emit('message', message)
})
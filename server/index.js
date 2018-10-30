const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')
const websocket = io(server)

const PORT = 4000

// app.listen(PORT, () => console.log(`Port is listening on ${PORT}`))
console.log(`Server is listening on port ${PORT}`)

const messages = []

websocket.on('connection', (socket) => {
    console.log('A client just joined on ', socket.id)
    socket.on('this', (data) => {
        websocket.emit(data)
    })
    socket.on('greeting', (data) => {
        console.log('The frontend says:', data)
    })
})
websocket.listen(PORT)

app.get('/api/greeting', (req, res) => res.status(200).send('Hi there'))


websocket.on('message', (message) => {
    messages.push(message)
    socket.broadcast.emit('message', message)
})
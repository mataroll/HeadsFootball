import http from 'http'
import { Server } from 'socket.io'
import { createApp } from './app.js'

const port = process.env.PORT || 8080
const app = createApp()
const server = http.createServer(app)
const io = new Server(server, { cors: { origin: process.env.CORS_ORIGIN || '*' } })

io.on('connection', (socket) => {
  console.log('client connected', socket.id)
  socket.emit('welcome', { id: socket.id })

  socket.on('ping', () => socket.emit('pong'))
  socket.on('disconnect', () => console.log('disconnected', socket.id))
})

server.listen(port, () => console.log(`Server listening on http://localhost:${port}`))

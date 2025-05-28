import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import type { ListItem } from '@grocerace/shared'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
})

const lists: Record<string, ListItem[]> = {}

io.on('connection', (socket) => {
  console.log('Connected:', socket.id)

  socket.on('join-list', (listId: string) => {
    socket.join(listId)
    socket.emit('list-init', lists[listId] || [])
  })

  socket.on('add-item', ({ listId, item }: { listId: string; item: ListItem }) => {
    if (!lists[listId]) lists[listId] = []
    lists[listId].push(item)
    io.to(listId).emit('item-added', item)
  })

  socket.on('disconnect', () => {
    console.log('Disconnected:', socket.id)
  })
})

httpServer.listen(3001, () => {
  console.log('✅ Server listening on http://localhost:3001')
})

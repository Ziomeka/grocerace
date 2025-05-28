import { io } from 'socket.io-client'

const socket = io('http://localhost:3001') // temp

export const useListSocket = (listId: string) => {
  const list = ref<string[]>([])

  socket.emit('join-list', listId)

  socket.on('list-init', (items) => {
    list.value = items
  })

  socket.on('item-added', (item) => {
    list.value.push(item)
  })

  const addItem = (item: string) => {
    socket.emit('add-item', { listId, item })
  }

  return {
    list,
    addItem,
  }
}

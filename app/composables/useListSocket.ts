import { io } from 'socket.io-client'
import type { ListItem } from '@grocerace/shared'

const socket = io('http://localhost:3001') // temp

export const useListSocket = (listId: string) => {
  const { displayName } = useUserSettings()
  const list = ref<ListItem[]>([])

  socket.emit('join-list', listId)

  socket.on('list-init', (items: ListItem[]) => {
    list.value = items
  })

  socket.on('item-added', (item: ListItem) => {
    list.value.push(item)
  })

  const addItem = (itemName: string) => {
    const item = {
      itemName,
      authorName: displayName.value,
      status: 'added',
    }
    socket.emit('add-item', { listId, item })
  }

  return {
    list,
    addItem,
  }
}

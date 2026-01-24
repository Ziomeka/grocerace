import { useStorage } from '@vueuse/core'

interface List {
  id: string
  name: string
  items: string[]
}

export const usePersonalLists = () => {
  const personalLists = useStorage<List[]>('personal-lists', [])

  const createList = (name: string) => {
    const id = uid()
    personalLists.value.push({ id, name, items: [] })
  }

  const getList = (id: string) => personalLists.value.find(list => list.id === id)

  const deleteList = (id: string) => {
    const index = personalLists.value.findIndex(list => list.id === id)
    if (index === -1)
      return
    personalLists.value.splice(index, 1)
  }

  const addItem = (listId: string, item: string) => {
    getList(listId)!.items.push(item)
  }

  const removeItem = (listId: string, index: number) => {
    getList(listId)!.items.splice(index, 1)
  }

  const updateItem = (listId: string, index: number, value: string) => {
    getList(listId)!.items[index] = value
  }

  return {
    personalLists: computed(() => personalLists.value),
    createList,
    getList,
    deleteList,
    addItem,
    removeItem,
    updateItem,
  }
}

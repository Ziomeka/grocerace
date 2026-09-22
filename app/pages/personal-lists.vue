<template>
  <div class="container">
    <div>
      <p class="font-heading fw-bold text-size-xl color-primary">
        Your personal lists
      </p>
      <ul>
        <li
          v-for="list in personalLists"
          :key="list.id"
        >
          <UiEditableTile
            :id="list.id"
            :title="list.name"
            @delete="deleteList(list.id)"
            @edit="editListName(list.id, $event)"
          />
        </li>
      </ul>
    </div>
    <form aria-labelledby="name-title" class="py-4" @submit.prevent="createList(listName)">
      <p id="name-title" class="font-heading fw-bold text-size-xl color-primary">
        Create new list
      </p>
      <div class="flex gap-2 items-end p-4">
        <UiTextInput v-model="listName" label="List id" class="w-xs" />
        <button type="submit" :disabled="!listName" aria-label="Create list">
          <span class="i-material-symbols-save text-2xl" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
  header: {
    titleKey: 'lists-title',
    back: true,
    backTo: '/',
  },
})

const { createList, deleteList, editListName, personalLists } = usePersonalLists()
const listName = ref('New List')
</script>

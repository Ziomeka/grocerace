<template>
  <div class="container">
    <div>
      <p class="font-heading fw-bold text-size-xl color-teal">
        Your personal lists
      </p>
      <ul>
        <li v-for="list in personalLists" :key="list.id">
          {{ list.name }}
        </li>
      </ul>
    </div>
    <form aria-labelledby="name-title" class="py-4">
      <p id="name-title" class="font-heading fw-bold text-size-xl color-teal">
        Create new list
      </p>
      <div class="flex gap-2 items-end p-4">
        <UiTextInput v-model="listName" label="List id" class="w-xs" />
        <button :disabled="!listName" class="btn-teal" @click.prevent="createList(listName)">
          Create
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

const { createList, personalLists } = usePersonalLists()
const listName = ref('')
</script>

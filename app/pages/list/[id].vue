<template>
  <div class="container">
    <p> Your list id is: {{ route.params.id }} </p>
    <form aria-labelledby="add-title" class="mb-4 p-2 max-w-xs">
      <p id="add-title" class="font-heading fw-bold text-size-xl color-teal">
        Add item to shopping list
      </p>
      <div class="flex gap-2 items-end p-4">
        <UiTextInput v-model="inputValue" label="Item" placeholder="Something" />
        <button :disabled="!inputValue" class="btn-teal" @click="add">
          Add
        </button>
      </div>
    </form>
    <div
      v-for="(item, index) in list"
      :key="index"
      class="tile mb-2"
    >
      <p class="font-heading fw-bold text-size-xl color-teal">{{ item.itemName }}</p>
      <p>Added by: {{ item.authorName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
  header: {
    titleKey: 'lists-title',
    back: true,
    backTo: '/lists',
    backToLabelKey: 'back-to-lists',
  },
})

const route = useRoute()
const { list, addItem } = useListSocket(route.params.id as string)

const inputValue = ref('')

const add = () => {
  addItem(inputValue.value)
  inputValue.value = ''
}
</script>

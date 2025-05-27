<template>
  <div class="container">
    <p> {{ route.params.id }} </p>
    <UiTextInput v-model="inputValue" label="Add list" error="Some error" placeholder="Something" class="p-2 max-w-xs" />
    <button :disabled="!inputValue" class="btn-teal" @click="add">
      Add
    </button>
    <p
      v-for="(item, index) in list"
      :key="index"
    >
      {{ item }}
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
  header: {
    titleKey: 'lists-title',
    back: true,
    backTo: '/lists',
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

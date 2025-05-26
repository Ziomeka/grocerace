<template>
  <div>
    <p> Lists </p>
    <UiTextInput v-model="inputValue" label="Add list" error="Some error" placeholder="Something" class="p-2 max-w-xs" />
    <button :disabled="!inputValue" @click="addItem" > Add </button>
    <p
      v-for="(list, index) in lists"
      :key="index"
    >
      {{ list }}
    </p>
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

const inputValue = ref('')

// dummy list array
const lists = ref<string[]>([])

const addItem = () => {
  lists.value.push(inputValue.value)
  inputValue.value = ''
}
</script>

<template>
  <div class="container">
    <p> Lists </p>
    <UiTextInput v-model="inputValue" label="Add list" error="Some error" placeholder="Something" class="p-2 max-w-xs" />
    <button :disabled="!inputValue" class="btn-teal" @click="addItem">
      Add
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import uid from '~/utils/uid'

definePageMeta({
  layout: 'default',
  header: {
    titleKey: 'lists-title',
    back: true,
    backTo: '/',
  },
})

const router = useRouter()

const inputValue = ref('')

// // dummy list array
// const lists = ref<string[]>([])

const addItem = () => {
  const id = uid()
  console.log(id, 'bla')
  router.push(`/list/${id}`)
}
</script>

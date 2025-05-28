<template>
  <div class="container">
    <button class="btn-pink" @click="createList">
      Create shopping list
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

const createList = () => {
  const id = uid()
  router.push(`/list/${id}`)
}
</script>

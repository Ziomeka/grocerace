<template>
  <div class="container">
    <div>
      <p class="font-heading fw-bold text-size-xl color-teal">
        Create new list
      </p>
      <button class="btn-pink m-4" @click="createList">
        Create
      </button>
    </div>
    <form aria-labelledby="name-title" class="py-4">
      <p id="name-title" class="font-heading fw-bold text-size-xl color-teal">
        Join existing list by its id
      </p>
      <div class="flex gap-2 items-end p-4">
        <UiTextInput v-model="listIdValue" label="List id" class="w-xs" />
        <button :disabled="!listIdValue" class="btn-teal" @click.prevent="goToList">
          Join
        </button>
      </div>
    </form>
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

const listIdValue = ref('')

const createList = () => {
  const id = uid()
  router.push(`/list/${id}`)
}

const goToList = () => {
  console.log(listIdValue.value)
  router.push(`/list/${listIdValue.value}`)
}
</script>

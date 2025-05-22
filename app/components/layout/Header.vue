<template>
  <header class="shadow-xl sticky top-0 bg-vanilla">
    <div class="color-teal text-size-4xl md:text-size-6xl flex flex-items-center flex-justify-between max-w-lg mx-auto px-4 py-2">
      <nuxt-link v-if="meta.back" class="text-xl" to="/">
        ←
      </nuxt-link>
      <h1 class="font-heading fw-bold truncate">
        {{ $t(meta.title) }}
      </h1>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { LayoutHeader } from '../../types/layout'
import { useRoute } from 'vue-router'

const route = useRoute()
const meta = computed(() => (route.meta.header as LayoutHeader))
</script>

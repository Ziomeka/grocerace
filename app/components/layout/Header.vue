<template>
  <header class="shadow-bottom sticky top-0 bg-surface">
    <div class="flex flex-items-center flex-justify-between container py-2">
      <nuxt-link v-if="meta.back" class="text-xl" :to="meta.backTo" :aria-label="$t(meta.backToLabelKey || 'back')">
        <span class="i-material-symbols-arrow-back text-3xl color-primary" />
      </nuxt-link>
      <span v-else>
        <span class="i-material-symbols-arrow-back text-3xl invisible" />
      </span>
      <h1 class="font-heading fw-bold text-size-2xl truncate color-primary">
        {{ $t(meta.titleKey) }}
      </h1>
      <layout-navigation class="<md:hidden" />
    </div>
  </header>
</template>

<script setup lang="ts">
import type { LayoutHeader } from '../../types/layout'
import { useRoute } from 'vue-router'

const route = useRoute()
const meta = computed(() => (route.meta.header as LayoutHeader))
</script>

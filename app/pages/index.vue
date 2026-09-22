<template>
  <div class="container flex flex-col gap-2">
    <p>
      <span class="font-heading fw-bold text-size-xl color-primary">Grocerace</span> is a real-time shared shopping list app designed for effortless collaboration.
    </p>
    <p>
      Add, track, and complete items together with friends or family — whether you're planning a grocery run or organizing a group event. See who added what, and keep your list up to date across all devices instantly.
    </p>
    <nuxt-link to="/lists" class="btn-secondary btn-xl self-end">
      Start
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
  ssr: true,
  header: {
    titleKey: 'brand',
    back: false,
  },
})
</script>

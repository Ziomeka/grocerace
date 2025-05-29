<template>
  <div class="container flex flex-col gap-2">
    <p>
      <span class="font-heading fw-bold text-size-xl color-teal">Grocerace</span> was created as part of my portfolio to demonstrate my skills in building modern, real-time web applications. But it’s also something I genuinely needed — I don’t enjoy shopping and wanted to make it as quick and efficient as possible.
    </p>
    <p>
      Want to connect or learn more about my work? Find me on <a href="https://www.linkedin.com/in/agnieszka-ziomek-1980/" target="_blank" class="font-heading fw-bold text-size-xl color-teal">LinkedIn</a>.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
  ssr: true,
  header: {
    titleKey: 'about-title',
    back: true,
    backTo: '/',
  },
})
</script>

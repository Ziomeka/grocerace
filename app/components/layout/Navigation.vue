<template>
  <nav class="grid grid-cols-3 gap-lg color-teal ">
    <nuxt-link to="lists" class="flex flex-col flex-items-center">
      <span class="i-material-symbols-list-alt text-3xl" />{{ $t('lists') }}
    </nuxt-link>
    <nuxt-link to="settings" class="flex flex-col flex-items-center">
      <span class="i-material-symbols-settings text-3xl" />{{ $t('settings') }}
    </nuxt-link>
    <nuxt-link to="about" class="flex flex-col flex-items-center">
      <span class="i-material-symbols-contact-page text-3xl" />{{ $t('about') }}
    </nuxt-link>
  </nav>
</template>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    ['@unocss/nuxt', { inspector: true }],
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'pl', name: 'Polish', file: 'pl.json' },
    ],
    defaultLocale: 'en',
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
})

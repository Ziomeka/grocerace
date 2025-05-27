import type { StorybookConfig } from '@nuxtjs/storybook'

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(ts|js|vue)'],
  addons: [],
  framework: '@storybook-vue/nuxt'
}

export default config
// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    stylistic: {
      indent: 2,
      quotes: 'single',
    },
    rules: {
      'vue/block-order': ['error', {
        order: [['template', 'script'], 'style'],
      }],
      'antfu/top-level-function': 'off',
      'perfectionist/sort-imports': ['off'], // todo create some sane rules, and make sure it works also for inside setup
    },
  }),
)

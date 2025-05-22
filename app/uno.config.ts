import presetMini from '@unocss/preset-mini'
import presetWebFonts from '@unocss/preset-web-fonts'
import { defineConfig, presetIcons } from 'unocss'

import { fonts } from './design/fonts'
import { preflights } from './design/preflights'
import { theme } from './design/theme'

export default defineConfig({
  preflights,
  theme,
  presets: [
    presetMini(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts(fonts),
  ],
  content: {
    pipeline: {
      include: [
        /\.(vue)($|\?)/,
        '**/*.{js,ts}',
      ],
      exclude: [
        '**/node_modules/**/*',
        '**/.pnpm/**/*',
        '**/.output/**/*',
        '**/.nuxt/**/*',
        '**/dist/**/*',
        '**/.git/**/*',
        '**/build/**/*',
      ],
    },
  },
})

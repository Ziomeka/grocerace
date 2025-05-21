import type { Theme } from 'unocss/preset-mini'
import { colors } from './colors'
import { fontFamily } from './fonts'

export const theme: Partial<Theme> = {
  colors,
  fontFamily,
}
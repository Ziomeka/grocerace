import type { Theme } from 'unocss/preset-mini'
import { extendedColors } from './colors'
import { fontFamily } from './fonts'

export const theme: Partial<Theme> = {
  colors: extendedColors,
  fontFamily,
}

import type { Theme } from 'unocss/preset-mini'
import { extendedColors } from './tokens/colors'
import { fontFamily } from './tokens/fonts'

export const theme: Partial<Theme> = {
  colors: extendedColors,
  fontFamily,
}

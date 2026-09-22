import type { Shortcut } from 'unocss'
import { buttonShortcuts } from './shourtcuts/buttons'

export const shortcuts: Shortcut[] = [
  ['shadow-top', 'shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]'],
  ['shadow-bottom', 'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'],
  ['container', 'max-w-4xl mx-auto p-4'],
  ['tile', 'p-4 b-2 b-primary b-solid b-rd-xl'],
  [/^border--(.*)$/, ([, c]) => `border-solid border-${c} border-1`],
  ...buttonShortcuts,
]

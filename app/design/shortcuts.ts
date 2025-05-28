import type { Shortcut } from 'unocss'

export const shortcuts: Shortcut[] = [
  ['shadow-top', 'shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]'],
  ['shadow-bottom', 'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'],
  ['container', 'max-w-4xl mx-auto p-4'],
  ['tile', 'p-4 b-2 b-teal b-solid b-rd-xl'],
  [/^btn-(.*)$/, ([, c]) => `p-2 font-heading fw-bold text-size-2xl bg-${c} color-vanilla b-rd-xl min-w-32 cursor-pointer disabled:color-gray disabled:bg-gray-lighten-70 disabled:cursor-auto`],
]

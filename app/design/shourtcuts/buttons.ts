import type { Shortcut } from 'unocss'

const buttonBase = `
  font-heading
  px-3
  fw-bold
  text-align-center
  cursor-pointer
  disabled:color-on-surface
  disabled:bg-on-surface-lighten-70
  disabled:cursor-auto
`

const buttonSizes = {
  base: 'py-1 text-size-base b-rd-md',
  lg: 'py-2 text-size-lg b-rd-md',
  xl: 'py-2 text-size-xl b-rd-lg',
} as const

type ButtonSize = keyof typeof buttonSizes

export const buttonShortcuts: Shortcut[] = [
  [
    /^btn-(?!base$|lg$|xl$|inverse-)(.*)$/,
    ([, c]) => `
      ${buttonBase}
      p-2 text-size-xl
      bg-${c}
      border-solid border-1 border-${c}
      color-on-${c}
    `,
  ],

  [
    /^btn-inverse-(.*)$/,
    ([, c]) => `
      ${buttonBase}
      p-2 text-size-xl
      bg-on-${c}
      border-solid border-1 border-${c}
      color-${c}
    `,
  ],

  [
    /^btn-(base|lg|xl)$/,
    ([, size]) => buttonSizes[size as ButtonSize],
  ],
]

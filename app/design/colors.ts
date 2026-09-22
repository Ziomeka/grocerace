export const colors = {
  'surface': '#fffbf5',
  'primary': '#28665e',
  'secondary': '#a96573',

  'on-surface': '#4b5563',
  'on-primary': '#fffbf5',
  'on-secondary': '#fffbf5',

  'action': '#0768df',
  'warning': '#b96f24',
  'success': '#3f7d5a',
  'destructive': '#ef4444',
}

const steps = [10, 30, 50, 70]

const generateColorMixVariants = (colors: Record<string, string>, steps: number[]) => {
  const result = { ...colors }

  for (const [name, color] of Object.entries(colors)) {
    for (const step of steps) {
      // Lighten toward white
      result[`${name}-lighten-${step}`] = `color-mix(in srgb, ${color} ${100 - step}%, white ${step}%)`

      // Darken toward black
      result[`${name}-darken-${step}`] = `color-mix(in srgb, ${color} ${100 - step}%, black ${step}%)`
    }
  }

  return result
}

export const extendedColors = generateColorMixVariants(colors, steps)

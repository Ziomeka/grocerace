export const colors = {
  teal: '#306e66',
  gray: '#4b5563',
  pink: '#f472b6',
  vanilla: '#fcf7ea',
  red: '#ef4444',
  blue: '#0768DF',
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

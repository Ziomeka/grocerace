import { useStorage } from '@vueuse/core'
import type { AvailableLocales } from '~/types/global'

export const useUserSettings = () => {
  const { $i18n } = useNuxtApp()
  const displayName = useStorage<string | undefined>('user-display-name', undefined)
  const locale = useStorage<AvailableLocales>('user-locale', $i18n.locale.value)

  const setDisplayName = (name: string) => {
    displayName.value = name.trim()
  }

  const setLocale = (value: AvailableLocales) => {
    locale.value = value
    $i18n.setLocale(value)
  }

  return {
    displayName: computed(() => displayName.value),
    locale: computed(() => locale.value),
    setDisplayName,
    setLocale,
  }
}

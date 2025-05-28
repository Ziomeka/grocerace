import { useStorage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

import type { AvailableLocales } from '~/types/global'

export interface UserSettings {
  displayName: string | undefined
  locale: AvailableLocales
}

export const useUserSettings = () => {
  const { $i18n } = useNuxtApp()
  const DEFAULT_SETTINGS: UserSettings = {
    displayName: undefined,
    locale: $i18n.locale.value,
  }

  const settings = useStorage<UserSettings>('user-settings', DEFAULT_SETTINGS)

  const setDisplayName = (name: string) => {
    settings.value.displayName = name.trim()
  }

  const setLocale = (locale: AvailableLocales) => {
    settings.value.locale = locale
    $i18n.locale.value = locale
  }

  return {
    displayName: computed(() => settings.value.displayName),
    locale: computed(() => settings.value.locale),
    setDisplayName,
    setLocale,
  }
}

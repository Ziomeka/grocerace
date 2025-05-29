<template>
  <div class="container">
    <p v-if="displayName" class="font-heading fw-bold text-size-4xl color-teal">
      Hi {{ displayName || 'Newcomer' }} !
    </p>
    <p>
      This is you settings panel where you can change your preferences
    </p>
    <form aria-labelledby="name-title" class="py-4">
      <p id="name-title" class="font-heading fw-bold text-size-xl color-teal">
        {{ displayName ? 'You can change your display name' : 'To use the app you need to set your display name' }}
      </p>
      <div class="flex gap-2 items-end p-4">
        <UiTextInput v-model="nameInputValue" label="Name" class="w-xs" />
        <button :disabled="!nameInputValue" class="btn-teal" @click.prevent="setName">
          {{ displayName ? 'Change' : 'Save' }}
        </button>
      </div>
    </form>
    <form aria-labelledby="language-title" class="py-4">
      <p id="language-title" class="font-heading fw-bold text-size-xl color-teal">
        Change language
      </p>
      <UiBaseSelect
        v-model="languageInputValue"
        :options="languageOptions"
        label="Language"
        class="m-4 w-xs"
        @update:model-value="setLocale($event)" />
    </form>
    <div v-if="displayName" class="py-4 flex content-end w-full">
      <nuxt-link to="/lists" class="btn-pink ml-auto">
        Go to shopping lists
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Option } from '~/components/ui/BaseSelect.vue'
import type { AvailableLocales } from '~/types/global'

definePageMeta({
  layout: 'default',
  header: {
    titleKey: 'settings',
  },
})

const { setDisplayName, displayName, locale, setLocale } = useUserSettings()

const nameInputValue = ref(displayName.value || '')
const languageOptions: Option<AvailableLocales>[] = [{ label: 'Polish', value: 'pl' }, { label: 'English', value: 'en' }]
const languageInputValue = ref(locale.value)

const setName = () => {
  setDisplayName(nameInputValue.value)
  nameInputValue.value = ''
}
</script>

<template>
  <div class="container">
    <p v-if="displayName" class="font-heading fw-bold text-size-4xl color-teal">
      Hi {{ displayName || 'Newcomer' }} !
    </p>
    <p>
      This is you settings panel where you can change your preferences
    </p>
    <form aria-labelledby="title" class="py-4">
      <p id="title" class="font-heading fw-bold text-size-xl color-teal">
        {{ displayName ? 'You can change your display name' : 'To use the app you need to set your display name' }}
      </p>
      <div class="flex gap-2 items-end p-4">
        <UiTextInput v-model="inputValue" label="Name" class="max-w-xs" />
        <button :disabled="!inputValue" class="btn-teal" @click.prevent="setName">
          {{ displayName ? 'Change' : 'Save' }}
        </button>
      </div>
    </form>
    <div class="py-4">
      <p class="font-heading fw-bold text-size-xl color-teal">
        Change language
      </p>
      <p class="p-4">
        TBD
      </p>
    </div>
    <div class="py-4 flex content-end w-full">
      <nuxt-link to="/lists" class="btn-pink ml-auto">
        Go to shopping lists
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
  header: {
    titleKey: 'settings',
  },
})

const { setDisplayName, displayName } = useUserSettings()

const inputValue = ref(displayName.value || '')

const setName = () => {
  setDisplayName(inputValue.value)
  inputValue.value = ''
}
</script>

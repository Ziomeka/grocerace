<template>
  <div class="flex flex-col">
    <label :for="id" class="pl-2 font-heading fw-bold text-size-md color-teal">{{ label }}</label>
    <input
      :id="id"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      :aria-invalid="error ? 'true' : 'false'"
      :aria-describedby="error ? `${id}-error` : undefined"
      class="p-1 text-size-xl b-teal b-solid b-rd-xl"
      @input="onInput"
    >
    <p v-if="error" :id="`${id}-error`" role="alert" class="pl-2 text-size-md color-red">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import { BASE_TIMEOUT } from '~/types/constants'
import uid from '~/utils/uid'

interface Props {
  modelValue: string
  label: string
  placeholder?: string
  error?: string
  disabled?: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const id = `text-input-${uid()}`

const onInput = useDebounceFn((event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}, BASE_TIMEOUT)
</script>

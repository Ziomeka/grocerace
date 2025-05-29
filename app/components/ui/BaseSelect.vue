<template>
  <div class="flex flex-col">
    <label :for="id" class="font-heading fw-bold text-size-md color-teal pl-2">
      {{ label }}
    </label>
    <select
      :id="id"
      :value="modelValue"
      class="p-1 text-size-xl b-2 b-teal b-solid b-rd-xl focus:b-rd-b-0"
      @change="onChange($event)"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts" generic="T extends string">
export interface Option<D> {
  label: string
  value: D
}

defineProps<{
  modelValue: T
  options: Option<T>[]
  label: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: T): void
}>()

const id = `select-${uid()}`

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value as T)
}
</script>

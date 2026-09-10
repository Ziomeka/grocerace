<template>
  <div class="flex items-center justify-between gap-3">
    <UiTextInput
      v-model="inputValue"
      label="List name"
      class="font-medium truncate"
      @update:model-value="$emit('edit', $event)"
    />

    <button
      type="button"
      aria-label="Delete"
      @click="$emit('delete')"
    >
      🗑️
    </button>
  </div>
</template>

<script setup lang="ts">
const { title } = defineProps<{
  title: string
}>()
defineEmits<{
  (e: 'edit', value: string): void
  (e: 'delete'): void
}>()

const inputValue = ref(title)
</script>

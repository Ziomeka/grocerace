<template>
  <div class="flex items-center gap-3 b-rd-xl m-2 p-2 border--primary focus:border-2">
    <UiTextInput
      v-model="inputValue"
      label="List name"
      @update:model-value="$emit('edit', $event)"
    />

    <button
      type="button"
      aria-label="Delete"
      class="btn-destructive btn-lg aspect-square"
      @click="$emit('delete')"
    >
      <span class="i-material-symbols-delete" />
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

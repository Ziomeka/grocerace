<template>
  <div class="flex flex-col">
    <EditableRoot
      v-slot="{ isEditing }"
      :default-value="fieldValue"
      :placeholder="fieldValue"
      activation-mode="none"
      submit-mode="enter"
      class="flex"
      @submit="value => fieldValue = value ?? ''"
    >
      <EditableArea>
        <EditablePreview />
        <EditableInput :aria-label="label" />
      </EditableArea>
      <EditableEditTrigger v-if="!isEditing" as-child>
        <button type="button" aria-label="Edit">
          ✏️
        </button>
      </EditableEditTrigger>
      <div
        v-else
        class="flex gap-2"
      >
        <EditableSubmitTrigger as-child>
          <button type="button" aria-label="Save">
            ✔️
          </button>
        </EditableSubmitTrigger>
        <EditableCancelTrigger as-child>
          <button type="button" aria-label="Cancel">
            ✖️
          </button>
        </EditableCancelTrigger>
      </div>
    </EditableRoot>
  </div>
</template>

<script setup lang="ts">
import { EditableArea, EditableCancelTrigger, EditableEditTrigger, EditableInput, EditablePreview, EditableRoot, EditableSubmitTrigger } from 'reka-ui'

interface Props {
  label: string
}

defineProps<Props>()

const fieldValue = defineModel<string>({ required: true })
</script>

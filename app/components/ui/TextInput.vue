<template>
  <EditableRoot
    v-slot="{ isEditing }"
    :default-value="fieldValue"
    :placeholder="fieldValue"
    activation-mode="none"
    submit-mode="enter"
    class="flex grow gap-2 min-w-0"
    @submit="value => fieldValue = value ?? ''"
  >
    <EditableArea class="grow flex items-center min-w-0">
      <EditablePreview tabindex="-1" class="grow p-2 truncate min-w-0" />
      <EditableInput :aria-label="label" class="grow border--primary b-rd-md text-size-lg h-full p-2 outline-primary outline-1" />
    </EditableArea>
    <EditableEditTrigger v-if="!isEditing" as-child>
      <button type="button" aria-label="Edit" class="btn-inverse-warning btn-lg aspect-square">
        <span class="i-material-symbols-draw" />
      </button>
    </EditableEditTrigger>
    <div
      v-else
      class="flex gap-2"
    >
      <EditableSubmitTrigger as-child>
        <button type="button" aria-label="Save" class="btn-inverse-success btn-lg aspect-square">
          <span class="i-material-symbols-done" />
        </button>
      </EditableSubmitTrigger>
      <EditableCancelTrigger as-child>
        <button type="button" aria-label="Cancel" class="btn-inverse-destructive btn-lg aspect-square">
          <span class="i-material-symbols-close" />
        </button>
      </EditableCancelTrigger>
    </div>
  </EditableRoot>
</template>

<script setup lang="ts">
import { EditableArea, EditableCancelTrigger, EditableEditTrigger, EditableInput, EditablePreview, EditableRoot, EditableSubmitTrigger } from 'reka-ui'

interface Props {
  label: string
}

defineProps<Props>()

const fieldValue = defineModel<string>({ required: true })
</script>

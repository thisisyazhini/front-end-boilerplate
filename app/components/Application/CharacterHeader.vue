<script setup lang="ts">
import { ViewMode } from '~/constants/view-mode-enum'

const props = defineProps<{
  title: string
  viewMode: ViewMode
}>()

const emit = defineEmits(['update:selectedDisplay'])

const selectedDisplay = computed({
  get: () => props.viewMode,
  set: value => emit('update:selectedDisplay', value),
})
</script>

<template>
  <UContainer>
    <div class="flex justify-between items-center border-x border-t border-neutral-800 p-4">
      <h1 class="text-2xl text-white">
        {{ props.title }}
      </h1>
      <div class="flex justify-between items-center gap-2">
        <label class="text-md text-white">Display mode</label>
        <USelectMenu
          v-model="selectedDisplay"
          size="sm"
          color="primary"
          :options="[ViewMode.LIST, ViewMode.GRID]"

          :ui-menu="{ background: 'bg-neutral-900', option: { base: 'bg-neutral-900', active: 'border border-primary', color: 'text-white' } }"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ViewMode } from '~/constants/view-mode-enum'

const props = defineProps<{
  title: string
  viewMode?: ViewMode
}>()
</script>

<template>
  <UContainer>
    <div class="flex justify-between items-center border-x border-t border-white p-2">
      <h1 class="text-lg">
        {{ props.title }}
      </h1>
      <div class="flex justify-between items-center gap-2">
        <label class="text-md">Display mode</label>
        <select class="px-4 py-2 border border-white" :value="props.viewMode">
          <option selected :value="ViewMode.LIST">
            List view
          </option>
          <option :value="ViewMode.GRID">
            Grid view
          </option>
        </select>
      </div>
    </div>
  </UContainer>
</template>

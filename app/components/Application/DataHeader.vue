<script setup lang="ts">
import { ViewMode } from '~/constants/view-mode-enum'

const props = defineProps<{
  title: string
  viewMode?: { type: ViewMode, default: ViewMode.LIST }
}>()
</script>

<template>
  <UContainer>
    <div class="flex justify-between items-center border-x border-t border-white p-2">
      <h1 class="text-2xl text-white">
        {{ props.title }}
      </h1>
      <div class="flex justify-between items-center gap-2">
        <label class="text-md text-white">Display mode</label>
        <USelectMenu :options="[ViewMode.LIST, ViewMode.GRID]" />
      </div>
    </div>
  </UContainer>
</template>

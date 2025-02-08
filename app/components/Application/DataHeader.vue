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
    <div class="flex justify-between items-center border-x border-t border-white p-2">
      <h1 class="text-2xl text-white">
        {{ props.title }}
      </h1>
      <div class="flex justify-between items-center gap-2">
        <label class="text-md text-white">Display mode</label>
        <USelectMenu
          v-model="selectedDisplay" :ui-menu="{ background: 'bg-black',
                                                input: 'bg-black',
                                                option: { active: 'bg-primary text-white',
                                                          color: 'text-white' } }" size="lg" :options="[ViewMode.LIST, ViewMode.GRID]"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { Pokemon } from '~/types/pokemon'
import type { RickAndMorty } from '~/types/rick-and-morty'
import { ViewMode } from '~/constants/view-mode-enum'

const characters = defineProps<{
  title: string
  characters: Pokemon[] | RickAndMorty[]
}>()

const selectedDisplay = ref(ViewMode.LIST)

function updateSelectedDisplay(changedValue: ViewMode) {
  selectedDisplay.value = changedValue
}
</script>

<template>
  <div class="py-8 bg-black">
    <ApplicationDataHeader :view-mode="selectedDisplay" :title="title" @update:selected-display="updateSelectedDisplay" />
    <ApplicationViewDataList v-if="selectedDisplay === ViewMode.LIST" :character="characters" />
    <ApplicationViewDataGrid v-else :character="characters" />
  </div>
</template>

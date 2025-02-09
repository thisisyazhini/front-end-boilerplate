<script setup lang="ts">
import type { Pokemon } from '~/types/pokemon'
import type { RickAndMorty } from '~/types/rick-and-morty'
import { ViewMode } from '~/constants/view-mode-enum'

const props = defineProps<{
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
    <ApplicationCharacterHeader :view-mode="selectedDisplay" :title="props.title" @update:selected-display="updateSelectedDisplay" />
    <ApplicationViewCharacterList v-if="selectedDisplay === ViewMode.LIST" :characters="props.characters" />
    <ApplicationViewCharacterGrid v-else :characters="props.characters" />
  </div>
</template>

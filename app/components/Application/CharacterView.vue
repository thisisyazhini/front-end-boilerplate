<script setup lang="ts">
import type { Pokemon } from '~/types/pokemon'
import type { RickAndMorty } from '~/types/rick-and-morty'
import { ViewMode } from '~/constants/view-mode-enum'

const props = defineProps<{
  page: number
  title: string
  characters: Pokemon[] | RickAndMorty[]
  totalCharacters: number
}>()

const emit = defineEmits(['update:characterId', 'update:pageId'])

function updateCharacterId(characterId: string) {
  emit('update:characterId', characterId)
}

function updatePageId(pageId: string) {
  emit('update:pageId', pageId)
}

const selectedDisplay = ref(ViewMode.LIST)

function updateSelectedDisplay(changedValue: ViewMode) {
  selectedDisplay.value = changedValue
}
</script>

<template>
  <div class="py-8 bg-black">
    <ApplicationCharacterHeader :view-mode="selectedDisplay" :title="props.title" @update:selected-display="updateSelectedDisplay" />
    <ApplicationViewCharacterList v-if="selectedDisplay === ViewMode.LIST" :characters="props.characters" @update:character-id="updateCharacterId" />
    <ApplicationViewCharacterGrid v-else :characters="props.characters" @update:character-id="updateCharacterId" />
    <ApplicationPagination :page="props.page" :total-characters="props.totalCharacters" @update:selected-page="updatePageId" />
  </div>
</template>

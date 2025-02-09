<script setup lang="ts">
import type { RickAndMortyList } from '~/types/rick-and-morty'
import { ViewMode } from '~/constants/view-mode-enum'

const { data } = useRickAndMortyData<RickAndMortyList>('character')

const characters = computed(() => data.value?.results || [])

const selectedDisplay = ref(ViewMode.LIST)

function updateSelectedDisplay(changedValue: ViewMode) {
  selectedDisplay.value = changedValue
}
</script>

<template>
  <div class="py-8 bg-black">
    <ApplicationDataHeader
      title="Rick and Morty Characters"
      :view-mode="selectedDisplay" @update:selected-display="updateSelectedDisplay"
    />
    <ApplicationViewDataList v-if="selectedDisplay === ViewMode.LIST" :character="characters" />
    <ApplicationViewDataGrid v-else :character="characters" />
  </div>
</template>

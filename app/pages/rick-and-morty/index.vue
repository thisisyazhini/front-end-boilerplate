<script setup lang="ts">
import { ViewMode } from '~/constants/view-mode-enum'

const { data } = useRickAndMortyData<any>('character')
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
    <ApplicationViewDataList v-if="selectedDisplay === ViewMode.LIST" :data="data" />
    <ApplicationViewDataGrid v-else :data="data" />
  </div>
</template>

<script setup lang="ts">
import { ViewMode } from '~/constants/view-mode-enum'

const { data } = usePokemonData<any>('pokemon')
const selectedDisplay = ref(ViewMode.LIST)

function updateSelectedDisplay(changedValue: ViewMode) {
  selectedDisplay.value = changedValue
}
</script>

<template>
  <div class="py-8 bg-black">
    <ApplicationDataHeader :view-mode="selectedDisplay" title="Pokemon Characters" @update:selected-display="updateSelectedDisplay" />
    <ApplicationViewDataList v-if="selectedDisplay === ViewMode.LIST" :data="data" />
    <ApplicationViewDataGrid v-else :data="data" />
  </div>
</template>

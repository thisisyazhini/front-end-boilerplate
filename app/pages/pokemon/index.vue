<script setup lang="ts">
import type { PokemonList } from '~/types/pokemon'
import { ViewMode } from '~/constants/view-mode-enum'
import { getPokemonImageUrl } from '~/lib/helper'

const { data } = usePokemonData<PokemonList>('pokemon')

const characters = computed(() => (data.value?.results || []).map((val) => {
  // get the pokemon image and map it to the pokemon
  val.image = getPokemonImageUrl(val.url)
  return val
}))

const selectedDisplay = ref(ViewMode.LIST)

function updateSelectedDisplay(changedValue: ViewMode) {
  selectedDisplay.value = changedValue
}
</script>

<template>
  <div class="py-8 bg-black">
    <ApplicationDataHeader :view-mode="selectedDisplay" title="Pokemon Characters" @update:selected-display="updateSelectedDisplay" />
    <ApplicationViewDataList v-if="selectedDisplay === ViewMode.LIST" :character="characters" />
    <ApplicationViewDataGrid v-else :character="characters" />
  </div>
</template>

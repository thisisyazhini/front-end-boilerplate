<script setup lang="ts">
import type { PokemonList } from '~/types/pokemon'
import { itemsPerPage } from '~/constants'
import { getPokemonId, getPokemonImageUrl } from '~/lib/helper'

const pageIndex = ref(1)
// fetch data when the params change
const { data, refresh } = usePokemonData<PokemonList>(() => `pokemon?offset=${(pageIndex.value - 1) * itemsPerPage}&limit=${itemsPerPage}`)

const characters = computed(() => (data.value?.results || []).map((val) => {
  // get the pokemon image, id and map it back to the pokemon
  val.image = getPokemonImageUrl(val.url)
  val.id = getPokemonId(val.url)
  return val
}))

async function navigateToPokemonDetail(characterId: string) {
  await navigateTo({ path: `/pokemon/${characterId}` })
}

function updatePageIndex(pageNumber: number) {
  pageIndex.value = pageNumber
  refresh()
}
</script>

<template>
  <ApplicationCharacterView
    title="Pokemon"
    :page="pageIndex"
    :characters="characters"
    :total-characters="data?.count || 0"
    @update:character-id="navigateToPokemonDetail"
    @update:page-id="updatePageIndex"
  />
</template>

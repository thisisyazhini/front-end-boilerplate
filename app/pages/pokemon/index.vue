<script setup lang="ts">
import type { PokemonList } from '~/types/pokemon'
import { getPokemonId, getPokemonImageUrl } from '~/lib/helper'

const { data } = usePokemonData<PokemonList>('pokemon')

const characters = computed(() => (data.value?.results || []).map((val) => {
  // get the pokemon image, id and map it back to the pokemon
  val.image = getPokemonImageUrl(val.url)
  val.id = getPokemonId(val.url)
  return val
}))

async function navigateToPokemonDetail(characterId: string) {
  await navigateTo({ path: `/pokemon/${characterId}` })
}
</script>

<template>
  <ApplicationCharacterView title="Pokemon" :characters="characters" @update:character-id="navigateToPokemonDetail" />
</template>

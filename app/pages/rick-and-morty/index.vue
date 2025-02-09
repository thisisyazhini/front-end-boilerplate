<script setup lang="ts">
import type { RickAndMortyList } from '~/types/rick-and-morty'

const { data } = useRickAndMortyData<RickAndMortyList>('character')

const characters = computed(() => data.value?.results || [])

async function navigateToRickAndMortyDetail(characterId: string) {
  await navigateTo({ path: `/rick-and-morty/${characterId}` })
}
</script>

<template>
  <ApplicationCharacterView title="Rick and Morty" :characters="characters" @update:character-id="navigateToRickAndMortyDetail" />
</template>

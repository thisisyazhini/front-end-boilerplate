<script setup lang="ts">
import type { RickAndMortyList } from '~/types/rick-and-morty'

const currentPage = ref(1)
const { data, refresh } = useRickAndMortyData<RickAndMortyList>(() => `character/?page=${currentPage.value}`)

const characters = computed(() => data.value?.results || [])

async function navigateToRickAndMortyDetail(characterId: string) {
  await navigateTo({ path: `/rick-and-morty/${characterId}` })
}
function updateCurrentPage(pageNumber: number) {
  currentPage.value = pageNumber
  refresh()
}
</script>

<template>
  <ApplicationCharacterView
    title="Rick and Morty"
    :page="currentPage"
    :characters="characters"
    :total-characters="data?.info.count || 0"
    @update:character-id="navigateToRickAndMortyDetail"
    @update:page-id="updateCurrentPage"
  />
</template>

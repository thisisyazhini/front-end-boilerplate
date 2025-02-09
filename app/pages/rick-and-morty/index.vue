<script setup lang="ts">
import type { RickAndMortyList } from '~/types/rick-and-morty'

const { data } = useRickAndMortyData<RickAndMortyList>('character')

const characters = computed(() => data.value?.results || [])
</script>

<template>
  <ApplicationCharacterView title="Rick and Morty" :characters="characters" />
</template>

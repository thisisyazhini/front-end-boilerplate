<script setup lang="ts">
import type { PokemonDetail } from '~/types/pokemon'

const route = useRoute()
const { data } = await usePokemonData<PokemonDetail>(`pokemon/${route.params.id}`)
const pokemonData = data.value
const imageUrl = pokemonData?.sprites.other['official-artwork']?.front_default

const items = computed(() => [
  { label: 'Abilities', content: pokemonData?.abilities.map(val => val.ability.name).join(', ') },
  { label: 'Forms', content: pokemonData?.forms.map(val => val.name).join(', ') },
  { label: 'Moves', content: pokemonData?.moves.map(val => val.move.name).join(', ') },
  { label: 'Type', content: pokemonData?.types.map(val => val.type.name).join(', ') },
  { label: 'Stats', content: pokemonData?.stats.map(val => val.stat.name).join(', ') },
])
const gameIndicesList = computed(() =>
  pokemonData?.game_indices.map(val =>
    ({ gameIndex: val.game_index, versionName: val.version.name, versionUrl: val.version.url }),
  ),
)
const page = ref(1)
const pageCount = 5

const gameIndicesListRows = computed(() => {
  return gameIndicesList.value?.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
</script>

<template>
  <div class="grid grid-cols-2 w-full bg-black text-white">
    <img :src="imageUrl" sizes="50vw" class="h-full object-contain">
    <div class="overflow-y-auto p-8">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold capitalize text-center">
          {{ pokemonData?.name }}
        </h1>
        <ULink
          class="text-sm underline"
          to="/pokemon"
          active-class="text-primary"
        >
          Back to Pokemon
        </ULink>
      </div>
      <div>
        <div class="flex items-center justify-between text-md gap-4 mt-4">
          <div class="space-y-2">
            <label class="font-bold">Weight</label>
            <div>{{ pokemonData?.weight }}</div>
          </div>

          <div class="space-y-2">
            <label class="font-bold">Height</label>
            <div>{{ pokemonData?.height }}</div>
          </div>

          <div class="space-y-2">
            <label class="font-bold">Order</label>
            <div>{{ pokemonData?.order }}</div>
          </div>

          <div class="space-y-2">
            <label class="font-bold">Base experience</label>
            <div>{{ pokemonData?.base_experience }}</div>
          </div>
        </div>
        <UAccordion
          class="py-6" color="white" :ui="{ item: { color: 'white' } }" variant="ghost" size="md"
          :items="items"
        >
          <template #item="{ item }">
            <p class="px-3 capitalize">
              {{ item.content || 'Unknown' }}
            </p>
          </template>
        </UAccordion>
        <UTable
          :ui="{
            base: 'bg-black border border-primary',
            td: {
              color: 'text-white',
            },
          }" :rows="gameIndicesListRows"
        />
        <div class="flex justify-center px-3 py-3.5">
          <UPagination
            v-model="page"
            :page-count="pageCount"
            :total="gameIndicesList?.length || 0"
            :inactive-button="{ color: 'white', variant: 'outline' }"
            :prev-button="{ icon: 'i-heroicons-arrow-small-left-20-solid', label: 'Prev', color: 'white', variant: 'outline' }"
            :next-button="{ icon: 'i-heroicons-arrow-small-right-20-solid', trailing: true, label: 'Next', color: 'white', variant: 'outline' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

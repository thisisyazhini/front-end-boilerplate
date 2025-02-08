<script setup lang="ts">
import { pokemonImageBaseUrl } from '../../constants/index'

const route = useRoute()
const { data } = await usePokemonData(`pokemon/${route.params.id}`)
const pokemonData = data.value as any
const imageUrl = `${pokemonImageBaseUrl}/${pokemonData.id}.png`

const items = computed(() => [{ label: 'Abilities', content: pokemonData.abilities.map(val => val.ability.name) }, { label: 'Forms', content: pokemonData.forms.map(val => val.name) }, { label: 'Moves', content: pokemonData.moves.map(val => val.move.name) }, { label: 'Type', content: pokemonData.types.map(val => val.type.name) }, { label: 'Stats', content: pokemonData.stats.map(val => val.stat.name) }])
const gameIndicesList = computed(() => pokemonData.game_indices.map(val => ({ gameIndex: val.game_index, versionName: val.version.name, versionUrl: val.version.url })))
const page = ref(1)
const pageCount = 5

const gameIndicesListRows = computed(() => {
  return gameIndicesList.value.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
</script>

<template>
  <div class="grid grid-cols-2 w-full bg-black text-white">
    <NuxtImg :src="imageUrl" sizes="50vw" class="h-full object-contain" />
    <div class="overflow-y-auto p-8">
      <h1 class="text-3xl font-bold capitalize text-center">
        {{ pokemonData.name }}
      </h1>
      <div>
        <div class="flex align-middle justify-between text-md gap-4 mt-4">
          <div class="space-y-2">
            <label class="font-bold">Weight</label>
            <div>{{ pokemonData.weight }}</div>
          </div>

          <div class="space-y-2">
            <label class="font-bold">Height</label>
            <div>{{ pokemonData.height }}</div>
          </div>

          <div class="space-y-2">
            <label class="font-bold">Order</label>
            <div>{{ pokemonData.order }}</div>
          </div>

          <div class="space-y-2">
            <label class="font-bold">Base experience</label>
            <div>{{ pokemonData.base_experience }}</div>
          </div>
        </div>
        <UAccordion
          class="py-6"
          color="white"
          :ui="{ item: { color: 'white' } }"
          variant="ghost"
          size="md"
          :items="items"
        >
          <template #item="{ item }">
            <p class="px-3">
              {{ item.content || 'Unknown' }}
            </p>
          </template>
        </UAccordion>
        <UTable
          :ui=" { base: 'bg-neutral-900',
                  td: {
                    color: 'text-white',
                  } }"
          :rows="gameIndicesListRows"
        />
        <div class="flex justify-center px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
          <UPagination v-model="page" :page-count="pageCount" :total="gameIndicesList.length" />
        </div>
      </div>
    </div>
  </div>
</template>

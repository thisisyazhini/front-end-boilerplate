<script setup lang="ts">
import type { Pokemon } from '~/types/pokemon'
import type { RickAndMorty } from '~/types/rick-and-morty'

const props = defineProps<{
  character: Pokemon[] | RickAndMorty[]
}>()
</script>

<template>
  <UContainer>
    <div class="flex justify-between items-center border border-neutral-800 p-4">
      <ul class="min-w-full grid grid-cols-3 gap-8">
        <li v-for="item in props.character" :key="item.name" class="bg-neutral-900 border border-neutral-800 p-4 my-1 rounded-sm">
          <div class="text-white mb-2 capitalize">
            {{ item.name }}
          </div>
          <div v-if="item.image">
            <NuxtImg class="mb-2 w-full object-contain rounded" :src="item.image" width="200px" height="200px" densities="x1" />
          </div>
          <div class="text-right">
            <UButton class="bg-black text-white" variant="outline" size="lg">
              Details
            </UButton>
          </div>
        </li>
      </ul>
    </div>
  </UContainer>
</template>

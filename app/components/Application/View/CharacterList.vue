<script setup lang="ts">
import type { Pokemon } from '~/types/pokemon'
import type { RickAndMorty } from '~/types/rick-and-morty'

const props = defineProps<{
  characters: Pokemon[] | RickAndMorty[]
}>()
const emit = defineEmits(['update:characterId'])
</script>

<template>
  <UContainer>
    <div class="flex justify-between items-center border border-neutral-800 p-4">
      <ul class="min-w-full space-y-4">
        <li v-for="item in props.characters" :key="item.name" class="bg-neutral-900 flex justify-between items-center border border-neutral-800 p-2 my-1 rounded-sm">
          <div class="flex items-center">
            <div v-if="item.image" class="mr-2">
              <NuxtImg :src="item.image" width="60px" height="60px" densities="x1" />
            </div>
            <label class="text-white capitalize">
              {{ item.name }}
            </label>
          </div>
          <UButton class="bg-black text-white" @click="emit('update:characterId', item.id)">
            Details
          </UButton>
        </li>
      </ul>
    </div>
  </UContainer>
</template>

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
      <ul class="min-w-full grid grid-cols-3 gap-8">
        <li v-for="item in props.characters" :key="item.name" class="bg-neutral-900 border border-neutral-800 p-4 my-1 rounded-sm">
          <div class="text-white mb-2 capitalize">
            {{ item.name }}
          </div>
          <div v-if="item.image">
            <img class="mb-2 w-full object-contain rounded" :src="item.image" width="200px" height="200px">
          </div>
          <div class="text-right" @click="emit('update:characterId', item.id)">
            <UButton class="bg-black text-white" variant="outline" size="lg">
              Details
            </UButton>
          </div>
        </li>
      </ul>
    </div>
  </UContainer>
</template>

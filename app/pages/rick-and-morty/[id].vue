<script setup lang="ts">
import { useRickAndMortyStore } from '~/lib/rick-and-morty-store'

const route = useRoute()

const store = useRickAndMortyStore()
const rickAndMortyData = await store.fetchData(route.params.id)

const items = computed(() => [
  { label: 'Status', content: rickAndMortyData?.status },
  { label: 'Species', content: rickAndMortyData?.species },
  { label: 'Gender', content: rickAndMortyData?.gender },
  { label: 'Type', content: rickAndMortyData?.type },
])

const episodeList = computed(() => rickAndMortyData?.episode.map((val: string) => ({ episodeLink: val })))
const page = ref(1)
const pageCount = 5

const episodeListRows = computed(() => {
  return episodeList.value?.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
</script>

<template>
  <div class="grid grid-cols-2 w-full bg-black text-white">
    <img :src="rickAndMortyData?.image" sizes="50vw" class="h-full object-contain">
    <div class="overflow-y-auto p-8">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold text-center">
          {{ rickAndMortyData?.name }}
        </h1>
        <ULink
          class="text-sm underline"
          to="/rick-and-morty"
          active-class="text-primary"
        >
          Back to Rick and Morty
        </ULink>
      </div>
      <div class="flex items-center justify-between text-md gap-4 mt-4">
        <div class="space-y-2">
          <label class="font-bold">
            Origin
          </label>
          <div>
            {{ rickAndMortyData?.origin.name }}
          </div>
        </div>

        <div class="space-y-2">
          <label class="font-bold">Location</label>
          <div>{{ rickAndMortyData?.location.name }}</div>
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
        :ui="{
          base: 'bg-black border border-primary',
          td: {
            color: 'text-white',
          },
        }"
        :rows="episodeListRows"
      />
      <div class="flex justify-center px-3 py-3.5 ">
        <UPagination
          v-model="page"
          :page-count="pageCount"
          :total="episodeList?.length || 0"
          :inactive-button="{ color: 'white', variant: 'outline' }"
          :prev-button="{ icon: 'i-heroicons-arrow-small-left-20-solid', label: 'Prev', color: 'white', variant: 'outline' }"
          :next-button="{ icon: 'i-heroicons-arrow-small-right-20-solid', trailing: true, label: 'Next', color: 'white', variant: 'outline' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { itemsPerPage } from '~/constants'

const pageProps = defineProps<{
  page: number
  totalCharacters: number
}>()

const emit = defineEmits(['update:selectedPage'])

const total = pageProps.totalCharacters / itemsPerPage
const selectedPage = computed({
  get: () => pageProps.page,
  set: value => emit('update:selectedPage', value),
})
</script>

<template>
  <UContainer class="mt-3">
    <UPagination
      v-model="selectedPage"
      class="justify-center px-3 py-3.5"
      :prev-button="{ icon: 'i-heroicons-arrow-small-left-20-solid', label: 'Prev', color: 'white', variant: 'outline' }"
      :next-button="{ icon: 'i-heroicons-arrow-small-right-20-solid', trailing: true, label: 'Next', color: 'white', variant: 'outline' }"
      :total="total"
      :inactive-button="{ color: 'white', variant: 'outline' }"
      :page-count="5"
    />
  </UContainer>
</template>

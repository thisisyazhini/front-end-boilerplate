<script setup lang="ts">
const props = defineProps<{
  data: any
}>()
</script>

<template>
  <UContainer>
    <div class="flex justify-between items-center border border-white p-2">
      <ul class="min-w-full grid grid-cols-3 gap-4">
        <li v-for="item in props.data.results" :key="item" class="border border-white p-3 my-1 rounded-sm">
          <div class="text-white mb-2">
            {{ item.name }}
          </div>
          <div v-if="item.image">
            <NuxtImg class="mb-2" :src="item.image" sizes="75px sm:50vw" densities="x1" />
          </div>
          <UButton class="bg-black text-white">
            Details
          </UButton>
        </li>
      </ul>
    </div>
  </UContainer>
</template>

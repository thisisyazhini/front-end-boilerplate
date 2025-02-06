<script setup lang="ts">
const props = defineProps<{
  data: any
}>()
</script>

<template>
  <UContainer>
    <div class="flex justify-between items-center border border-white p-2">
      <ul class="min-w-full">
        <li v-for="item in props.data.results" :key="item" class="flex justify-between items-center border border-white p-2 my-1 rounded-sm">
          <div class="flex items-center">
            <div v-if="item.image">
              <NuxtImg :src="item.image" sizes="75px sm:50vw" densities="x1" />
            </div>
            <div class="text-white">
              {{ item.name }}
            </div>
          </div>
          <UButton class="bg-black text-white">
            Details
          </UButton>
        </li>
      </ul>
    </div>
  </UContainer>
</template>

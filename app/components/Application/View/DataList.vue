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
              <NuxtImg :src="item.image" width="60px" height="60px" densities="x1" />
            </div>
            <label class="text-white">
              {{ item.name }}
            </label>
          </div>
          <UButton class="bg-black text-white">
            Details
          </UButton>
        </li>
      </ul>
    </div>
  </UContainer>
</template>

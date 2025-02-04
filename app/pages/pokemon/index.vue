<script setup lang="ts">
const { data } = usePokemonData<any>('pokemon')
</script>

<template>
  <div class="py-8 bg-black">
    <ApplicationDataHeader title="Pokemon Characters" />
    <UContainer>
      <div class="flex justify-between items-center border border-white p-2">
        <ul>
          <li v-for="item in data.results" :key="item?.url">
            <div>
              {{ item.name }}
            </div>
            <UButton class="bg-black text-white">
              Details
            </UButton>
          </li>
        </ul>
      </div>
    </UContainer>
  </div>
</template>

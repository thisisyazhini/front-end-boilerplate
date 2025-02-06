<script setup lang="ts">
const { data } = useRickAndMortyData<any>('character')
</script>

<template>
  <div class="py-8 bg-black">
    <ApplicationDataHeader title="Rick and Morty Characters" />
    <ApplicationViewDataList :data="data" />
    <ApplicationViewDataGrid :data="data" />
  </div>
</template>

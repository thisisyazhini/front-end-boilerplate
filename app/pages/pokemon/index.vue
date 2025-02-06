<script setup lang="ts">
const { data } = usePokemonData<any>('pokemon')
</script>

<template>
  <div class="py-8 bg-black">
    <ApplicationDataHeader title="Pokemon Characters" />
    <ApplicationViewDataList :data="data" />
    <ApplicationViewDataGrid :data="data" />
  </div>
</template>

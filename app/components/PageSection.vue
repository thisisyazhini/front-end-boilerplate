<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <section class="rounded bg-neutral-900 border border-primary">
    <header class="border-b border-b-neutral-800 p-4">
      <h2 class="text-center text-2xl font-bold tracking-wide text-white">
        {{ props.title }}
      </h2>
    </header>
    <main class="p-4">
      <slot />
    </main>
  </section>
</template>

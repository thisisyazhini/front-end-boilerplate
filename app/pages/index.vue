<template>
  <div class="py-8">
    <UContainer>
      <header class="mb-8 py-2 text-xl">
        <h1 class="text-2xl">
          Please pick a character for more fun!
        </h1>
      </header>
      <div class="grid gap-4 xl:grid-cols-2">
        <NuxtLink to="/rick-and-morty">
          <PageSection title="Rick and Morty API response">
            <ExampleApiResponseRickAndMorty />
          </PageSection>
        </NuxtLink>
        <NuxtLink to="/pokemon">
          <PageSection title="Pokemon API response">
            <ExampleApiResponsePokemon />
          </PageSection>
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>

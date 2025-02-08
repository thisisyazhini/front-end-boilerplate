<template>
  <header class="bg-black py-8">
    <UContainer class="flex items-center">
      <nav>
        <ul class="flex gap-2 bg-black">
          <li>
            <ApplicationHeaderLink to="/" label="Home" />
          </li>
          <li>
            <ApplicationHeaderLink to="/assignment" label="Read the assignment instructions" />
          </li>
        </ul>
      </nav>
      <div class="ml-auto">
        <UButton to="https://github.com/spend-cloud-tom/front-end-boilerplate" icon="mdi:github" color="primary" label="GitHub repository" variant="outline" />
      </div>
    </UContainer>
  </header>
</template>

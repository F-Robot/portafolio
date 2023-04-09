<script setup lang="ts">
const githubLink = 'https://github.com/F-Robot'
</script>

<template>
  <div class="mx-7">
    <p class="text-lg leading-6 text-white">Hi all. I am</p>
    <p class="text-6xl leading-[80px] text-white">
      Ricardo
      <br class="block md:hidden" />
      Blanco
    </p>
    <p
      class="mb-20 text-xl leading-10 text-accent-tertiary lg:text-3xl lg:text-accent-secondary"
    >
      > Full-stack developer
    </p>
    <p class="mb-2.5 hidden leading-5 lg:block">
      // complete the game to continue
    </p>
    <p class="mb-2.5 hidden leading-5 lg:block">
      // you can also see it on my Github page
    </p>
    <p class="mb-2.5 block leading-5 lg:hidden">
      // find my profile on Github:
    </p>
    <p class="font-medium leading-5">
      <span class="text-accent-secondary">const </span>
      <span class="text-accent-tertiary">githubLink </span>
      <span class="text-white">= </span>
      <br class="block md:hidden" />
      <span class="inline md:hidden">&nbsp;&nbsp;</span>
      <a
        target="_blank"
        :href="githubLink"
        class="text-accent hover:text-accent-hover"
      >
        “{{ githubLink }}”
      </a>
    </p>
  </div>
</template>

<script setup lang="ts">
const githubLink = 'https://github.com/F-Robot'
</script>

<template>
  <div>
    <p class="text-lg leading-6 text-white">Hi all. I am</p>
    <p class="text-[62px] leading-[81px] text-white">Ricardo Blanco</p>
    <p class="pb-[81px] text-[32px] leading-[42px] text-accent-secondary">
      > Front-end developer
    </p>
    <p class="pb-[9.6px] leading-[21px]">// complete the game to continue</p>
    <p class="pb-[9.6px] leading-[21px]">
      // you can also see it on my Github page
    </p>
    <p class="font-medium leading-[21px]">
      <span class="text-accent-secondary">const </span>
      <span class="text-accent-tertiary">githubLink </span>
      <span class="text-white">= </span>
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

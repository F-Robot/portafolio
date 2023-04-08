<script setup lang="ts">
const text = 'find me:'
const links = [
  {
    text: '',
    icon: 'fa-brands fa-linkedin',
    href: 'https://www.linkedin.com/in/ricardo-blanco-escobedo/',
  },
  {
    text: '',
    icon: 'fa-brands fa-instagram',
    href: 'https://www.instagram.com/_ricardoblanco_',
  },
  {
    text: '',
    icon: 'fa-brands fa-twitter',
    href: 'https://twitter.com/RicardoBla101',
  },
  {
    text: '@F-Robot',
    icon: 'fa-brands fa-github',
    href: 'https://github.com/F-Robot',
  },
]
</script>

<template>
  <footer
    class="absolute bottom-0 flex min-h-[49.5px] w-full border border-solid border-border"
  >
    <span
      class="flex cursor-default items-center border-r border-solid border-border px-[22px]"
    >
      {{ text }}
    </span>
    <a
      v-for="{ text, icon, href } in links"
      :key="href"
      :href="href"
      target="_blank"
      class="flex cursor-default items-center border-r border-solid border-border px-[14px] last:ml-auto last:border-l last:border-r-0 hover:text-primary-hover"
    >
      {{ text && `${text}&nbsp;` }}
      <font-awesome-icon v-if="icon" class="text-2xl" :icon="icon" />
    </a>
  </footer>
</template>

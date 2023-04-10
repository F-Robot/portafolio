<script setup lang="ts">
import FooterTitle from '@/components/FooterTitle.vue'
import FooterAnchor from '@/components/FooterAnchor.vue'

const title = 'find me:'
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
  <footer class="flex h-12 w-full border-t border-solid border-border">
    <FooterTitle :title="title" />
    <FooterAnchor
      v-for="{ text, icon, href } in links"
      :key="href"
      :href="href"
      :text="text"
      :icon="icon"
    />
  </footer>
</template>

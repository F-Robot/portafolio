<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'

import type { ProjectCardProps } from '@/types'

// Shopnetmx

const projects: ProjectCardProps[] = [
  {
    src: '/p5r-logo.jpg',
    href: 'https://persona.atlus.com/p5r',
    bgClass: '',
    framework: 'react',
    description:
      'Persona 5 Royal landing page, SPA, CSR, REST API, Analytics, Pixels, etc...',
  },
  {
    src: '/shopnet-logo.png',
    href: 'https://shopnet.com.mx',
    bgClass: 'bg-shopnet',
    framework: 'vuejs',
    description:
      'Shopnet landing page, SPA, CSR, REST API, Analytics, infinite scroll, etc...',
  },
  {
    src: '/snd-logo.svg',
    href: 'https://hub.snd.com.mx/login',
    bgClass: ' bg-snd',
    framework: 'react',
    description: 'SND Dashboard, Recharts, SSR, REST API, Analytics, etc...',
  },
  {
    src: '/shopnet-logo.png',
    href: 'https://play.google.com/store/apps/details?id=mx.com.shopnet',
    bgClass: ' bg-shopnet',
    framework: 'vuejs',
    description:
      'Shopnet application, PWA, CSR, REST API, Analytics, hybrid app, etc...',
  },
  {
    src: '/snd-logo.svg',
    href: 'https://snd.com.mx/',
    bgClass: ' bg-snd',
    framework: 'vuejs',
    description: 'SND landing page, SPA, CSR, REST API, Analytics, etc...',
  },
]
</script>

<template>
  <main
    class="relative my-7 grid flex-grow grid-cols-[repeat(1,_330px)] items-center justify-center gap-5 md:grid-cols-[repeat(auto-fit,_370px)] md:gap-10 lg:mx-[60px]"
  >
    <ProjectCard
      v-for="project in projects"
      :key="project.src"
      v-bind="project"
    />
  </main>
</template>

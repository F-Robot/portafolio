<script setup lang="ts">
import { RouterLink, type RouteLocationRaw } from 'vue-router'

type Link = { text: string; to: RouteLocationRaw }

const name = 'ricardo-blanco'

const links: Link[] = [
  { text: '_hello', to: { name: 'home' } },
  { text: '_about-me', to: { name: 'about' } },
  { text: '_projects', to: { name: 'project' } },
  { text: '_contact-me', to: { name: 'contact' } },
]
</script>

<template>
  <nav class="flex min-h-[56px] border border-solid border-border">
    <span
      class="flex cursor-default items-center border-r border-solid border-border pl-[22px] pr-[155px]"
    >
      {{ name }}
    </span>
    <RouterLink
      v-for="{ text, to } in links"
      v-slot="{ isActive, navigate, href }"
      :key="text"
      :to="to"
      custom
    >
      <a
        :text="text"
        :href="href"
        @click="navigate"
        :class="
          isActive && 'border-b-[3px] border-solid border-b-accent !text-white'
        "
        class="flex cursor-default items-center border-r border-solid border-border px-[32px] last:ml-auto last:border-l last:border-r-0 hover:text-primary-hover"
      >
        {{ text }}
      </a>
    </RouterLink>
  </nav>
</template>

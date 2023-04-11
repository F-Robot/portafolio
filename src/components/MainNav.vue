<script setup lang="ts">
import { computed, ref } from 'vue'

import NavMenu from '@/components/NavMenu.vue'
import NavLink from '@/components/NavLink.vue'
import NavTitle from '@/components/NavTitle.vue'
import MainFooter from '@/components/MainFooter.vue'

import type { RouteLocationRaw } from 'vue-router'

type Link = { text: string; to: RouteLocationRaw }

const links: Link[] = [
  { text: '_hello', to: { name: 'home' } },
  { text: '_projects', to: { name: 'project' } },
]
const title = 'ricardo-blanco'

const isOpen = ref(false)
const openClass = computed(() => isOpen.value && 'absolute z-10 h-screen')
const toggle = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <header
    class="flex w-full flex-col rounded-lg bg-background lg:static lg:z-0 lg:h-14"
    :class="openClass"
  >
    <nav
      class="flex h-14 justify-between border-b border-solid border-border lg:justify-start"
    >
      <NavTitle class="ml-5.25" :title="title" />
      <NavMenu
        @click="toggle"
        :active="isOpen"
        class="mr-4.25 block lg:hidden"
      />
      <NavLink
        v-for="{ text, to } in links"
        class="hidden lg:block"
        :text="text"
        :key="text"
        :to="to"
      />
    </nav>
    <div v-if="isOpen" class="flex flex-col lg:hidden">
      <NavLink
        v-for="{ text, to } in links"
        :text="text"
        :key="text"
        :to="to"
      />
    </div>
    <MainFooter v-if="isOpen" class="mt-auto lg:hidden" />
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'

type Link = { text: string; to: RouteLocationRaw }

const name = 'ricardo-blanco'

const links: Link[] = [
  { text: '_hello', to: { name: 'home' } },
  { text: '_about-me', to: { name: 'about' } },
  { text: '_projects', to: { name: 'project' } },
  { text: '_contact-me', to: { name: 'contact' } },
]

const open = ref(false)
const toggleNav = () => (open.value = !open.value)
const icon = computed(() =>
  open.value ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
)
</script>
<template>
  <nav
    class="absolute z-[2] flex h-full w-full flex-col lg:min-h-[56px] lg:flex-row"
  >
    <div class="flex min-h-[56px] border border-solid border-border">
      <span
        class="flex cursor-default items-center pl-[22px] lg:border-r lg:border-solid lg:border-border lg:pr-[155px]"
      >
        {{ name }}
      </span>
      <div class="ml-auto mr-[18px] flex h-full items-center lg:hidden">
        <font-awesome-icon
          class="cursor-default text-2xl hover:text-primary-hover"
          @click="toggleNav"
          :icon="icon"
        />
      </div>
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
            isActive &&
            'border-b-[3px] border-solid border-b-accent !text-white'
          "
          class="hidden cursor-default items-center border-r border-solid border-border px-[32px] last:ml-auto last:border-l last:border-r-0 hover:text-primary-hover lg:flex"
        >
          {{ text }}
        </a>
      </RouterLink>
    </div>
    <div v-if="open" class="h-full bg-background">
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
            isActive &&
            'border-b-[3px] border-solid border-b-accent !text-white'
          "
          class="flex cursor-default items-center border-r border-solid border-border pl-[18px] py-[17px] last:ml-auto last:border-l last:border-r-0 hover:text-primary-hover lg:flex"
        >
          {{ text }}
        </a>
      </RouterLink>
    </div>
  </nav>
</template>

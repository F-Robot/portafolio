<script setup lang="ts">
import { ref } from 'vue'
import NavMenu from '@/components/NavMenu.vue'

const isOpen = ref(false)
const toggle = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <nav class="w-full bg-background" :class="isOpen && 'absolute z-10 h-full'">
    <div
      class="flex h-14 items-center justify-between border-b border-solid border-border"
    >
      <span class="ml-5.25">ricardo-blanco</span>
      <NavMenu :active="isOpen" @click="toggle" class="mr-4.25" />
    </div>
    <div v-if="isOpen">Hola</div>
  </nav>
</template>

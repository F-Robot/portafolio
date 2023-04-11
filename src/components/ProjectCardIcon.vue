<script setup lang="ts">
const props = defineProps<{ framework: 'vuejs' | 'react' }>()
const icon = `fa-brands fa-${props.framework}`
const color = props.framework === 'react' ? 'bg-react' : 'bg-vue'
const href =
  props.framework === 'react' ? 'https://react.dev/' : 'https://vuejs.org/'
</script>

<template>
  <a
    class="flex h-7 w-7 items-center justify-center rounded-sm"
    :href="href"
    :class="color"
    target="_blank"
  >
    <font-awesome-icon class="text-2xl text-black" :icon="icon" />
  </a>
</template>

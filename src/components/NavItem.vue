<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <button
    class="h-14 border-b border-solid border-border pl-4.25 text-left hover:text-primary-hover lg:h-full lg:border-b-0 lg:border-r lg:px-8 lg:last:ml-auto lg:last:border-l lg:last:border-r-0"
  >
    {{ text }}
  </button>
</template>

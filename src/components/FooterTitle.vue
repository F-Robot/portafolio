<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <span
    class="flex h-full cursor-default items-center border-r border-solid border-border pl-5.25 pr-16 lg:pr-5.25"
  >
    {{ title }}
  </span>
</template>

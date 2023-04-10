<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <span
    class="flex h-full cursor-default items-center lg:border-r lg:border-solid lg:border-border lg:pr-40"
  >
    {{ title }}
  </span>
</template>

<script setup lang="ts">
defineProps<{ src: string }>()
</script>
<template>
  <img
    :src="src"
    class="h-full w-full rounded-t-1.5xl object-fill object-top"
    alt="project-img"
  />
</template>

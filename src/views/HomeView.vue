<script setup lang="ts">
import HelloMessage from '@/components/HelloMessage.vue'
import ShapesBackground from '@/components/ShapesBackground.vue'
</script>

<template>
  <div class="relative flex h-full items-center justify-around">
    <HelloMessage />
    <HelloMessage class="hidden lg:block" />
    <ShapesBackground />
  </div>
</template>

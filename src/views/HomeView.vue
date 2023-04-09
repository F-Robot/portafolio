<script setup lang="ts">
import HelloMessage from '@/components/HelloMessage.vue'
import ShapesBackground from '@/components/ShapesBackground.vue'
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <HelloMessage />
    <HelloMessage class="hidden lg:block" />
  </div>
  <ShapesBackground />
</template>

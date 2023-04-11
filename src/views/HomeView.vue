<script setup lang="ts">
import HelloMessage from '@/components/HelloMessage.vue'
import ShapesBackground from '@/components/ShapesBackground.vue'
import { Game } from '@/tetris/Game'
import { ref, watchEffect } from 'vue'

// const tetris = ref()
// const game = ref()

// watchEffect(() => {
//   if (tetris.value) {
//     const game = new Game(tetris.value)
//     game?.start()
//   }
// })
</script>

<template>
  <main class="relative flex flex-grow items-center justify-around">
    <HelloMessage />
    <div class="hidden: lg:block" />
    <!-- <div ref="tetris" class="tetris h-[500px] w-[250px]" /> -->
    <ShapesBackground />
  </main>
</template>

<style scoped>
.tetris {
  filter: blur(0px) !important;
  height: 500px !important;
  width: 250px !important;
  background-color: rgb(1, 22, 39) !important;
  color: rgb(255, 255, 255) !important;
}
</style>

<script setup lang="ts">
import HelloMessage from '@/components/HelloMessage.vue'
</script>

<template>
  <div
    class="bg-shape-horizontal relative flex h-full items-center justify-around"
  >
    <HelloMessage class="z-[1]" />
    <div class="z-[1]">Tetris game</div>
  </div>
</template>

<style scoped>
.bg-shape-horizontal::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/shape-gradient-variant.svg'),
    url('/shape-gradient.svg');
  background-size: 45%, 45%;
  background-repeat: no-repeat, no-repeat;
  background-position: center, right;
  mix-blend-mode: lighten;
  filter: blur(174px);
  opacity: 0.4;
}

.bg-shape-vertical::before {
  content: '';
  position: absolute;
  top: 10%;
  bottom: 0%;
  right: 0%;
  left: 0%;

  background-image: url('/shape-gradient-variant.svg'),
    url('/shape-gradient.svg');
  background-position: top, center;
  background-repeat: no-repeat, no-repeat;
  mix-blend-mode: lighten;

  filter: blur(174px);
  opacity: 0.4;
}
</style>

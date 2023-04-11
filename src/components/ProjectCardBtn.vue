<script setup lang="ts">
defineProps<{ text: string; href: string }>()
</script>
<template>
  <a :href="href" target="_blank">
    <button
      class="w-[129px] rounded-lg bg-button py-2.5 text-center text-sm text-white"
    >
      {{ text }}
    </button>
  </a>
</template>

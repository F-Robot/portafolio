<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ active: boolean }>()
const icon = computed(() => `fa-solid ${props.active ? 'fa-xmark' : 'fa-bars'}`)
</script>

<template>
  <button class="p-1">
    <font-awesome-icon class="text-2xl" :icon="icon" />
  </button>
</template>

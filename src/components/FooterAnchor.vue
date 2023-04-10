<script setup lang="ts">
defineProps<{ href: string; text?: string; icon?: string }>()
</script>
<template>
  <a
    :key="href"
    :href="href"
    target="_blank"
    class="flex items-center border-r border-solid border-border px-3.5 last:ml-auto last:border-l last:border-r-0 hover:text-primary-hover"
  >
    <span class="hidden lg:block">{{ text && `${text}&nbsp;` }}</span>
    <font-awesome-icon v-if="icon" class="text-2xl" :icon="icon" />
  </a>
</template>

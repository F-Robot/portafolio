<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<script setup lang="ts">
import { RouterLink, type RouteLocationRaw } from 'vue-router'
import NavItem from '@/components/NavItem.vue'

defineProps<{ to: RouteLocationRaw; text: string }>()
</script>
<template>
  <RouterLink v-slot="{ isActive, navigate }" :to="to" custom>
    <NavItem
      @click="navigate"
      v-bind="$attrs"
      :text="text"
      :class="
        isActive && '!border-b-[3px] border-solid border-b-accent !text-white'
      "
    />
  </RouterLink>
</template>

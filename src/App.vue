<script setup lang="ts">
import { RouterView } from 'vue-router'

import MainNav from '@/components/MainNav.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <AppLayout>
    <MainNav />
    <RouterView />
    <MainFooter class="hidden lg:flex" />
  </AppLayout>
</template>

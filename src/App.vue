<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

import MainNav from '@/components/MainNav.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <AppLayout>
    <MainNav />
    <MainLayout>
      <RouterView />
    </MainLayout>
    <MainFooter class="hidden lg:flex" />
  </AppLayout>
</template>

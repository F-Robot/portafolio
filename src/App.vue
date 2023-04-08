<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import MainNav from '@/components/MainNav.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <MainLayout>
    <MainNav />
    <RouterView />
    <MainFooter />
  </MainLayout>
</template>

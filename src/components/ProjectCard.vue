<script setup lang="ts">
import ProjectCardBtn from '@/components/ProjectCardBtn.vue'
import ProjectCardImg from '@/components/ProjectCardImg.vue'
import ProjectCardIcon from '@/components/ProjectCardIcon.vue'

defineProps<{
  src: string
  href: string
  bgClass?: string
  description: string
  framework: 'vuejs' | 'react'
}>()
</script>

<template>
  <div
    class="flex h-[315px] w-[330px] flex-col rounded-1.5xl border border-solid border-border bg-card md:w-[370px]"
  >
    <div
      class="relative h-36 rounded-t-1.5xl"
      :class="bgClass && `p-5 ${bgClass}`"
    >
      <ProjectCardImg :src="src" />
      <ProjectCardIcon :framework="framework" class="absolute right-4 top-4" />
    </div>
    <div class="mx-8 flex h-full flex-col justify-center gap-5.25">
      <p>{{ description }}</p>
      <ProjectCardBtn :href="href" text="view-project" />
    </div>
  </div>
</template>

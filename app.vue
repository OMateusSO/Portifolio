<script setup lang="ts">
import '@/sharedTheme' 
import { useHead } from '#imports'

useHead({
  title: 'OMateusSO'
})
</script>

<template>
  <Nav />
  <div class="pt-16">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Zap />
  </div>
  <Foot />
</template>

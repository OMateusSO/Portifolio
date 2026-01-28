<script setup lang="ts">
import { lightDark } from '@/sharedTheme';
import { useHead } from '#imports'
useHead({
  title: 'OMateusSO'
})
</script>

<template>
  <Nav/>
  <div class="pt-16" :class="{ 'dark-theme': lightDark }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Zap/>
  </div>
  <Foot />
</template>

<style>

</style>

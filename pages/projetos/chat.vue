<template>
  <Nav></Nav>
  <div :class="{ 'dark-theme': lightDark }" class="flex items-center justify-center h-screen" >
    <p>chat</p>
  </div>
</template>

<script setup lang="ts">
import { lightDark } from '@/sharedTheme';
</script>

<style>
.dark-theme {

}
</style>
<template>
  <Nav></Nav>
  <div :class="{ 'dark-theme': lightDark }" class="flex flex-col justify-center items-center min-h-screen py-8 bg-gray-100 dark:bg-gray-900">
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
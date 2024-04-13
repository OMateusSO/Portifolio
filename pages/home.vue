<script setup lang="ts">
import { lightDark } from '../sharedTheme';
</script>

<template>
  <Nav></Nav>
  <div :class="{ 'dark-theme': lightDark }" class="flex items-center justify-center h-screen">

  </div>

</template>
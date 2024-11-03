<template>
  <div :class="{ 'dark-theme': lightDark }" class="flex flex-col h-full">
    <div :class="{ 'border-t border-gray-300': !lightDark, 'border-t border-gray-700': lightDark }"></div>
    <div class="container flex flex-col items-center text-gray-700 justify-center space-y-2 py-8 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
      <p>Copyright © 2024 OMateusSO, Inc.</p>
    </div>
    <div :class="{ 'border-t border-gray-300': !lightDark, 'border-t border-gray-700': lightDark }"></div>
  </div>
</template>

<script setup lang="ts">
import { lightDark } from '../sharedTheme';


</script>

<style scoped>

.dark-theme a {
  color: rgb(255, 255, 255);
}

</style>

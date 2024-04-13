<script setup lang="ts">
import { lightDark } from '../sharedTheme';
</script>

<template>
  <Nav></Nav>
  <div :class="{ 'dark-theme': lightDark }" class="flex items-center justify-center h-screen">
    <div class="w-[350px] h-auto p-4 border bg-white border-gray-300 rounded-lg">
      <div class="flex items-center mb-4">
        <div class="mr-4">
          <img src="/assets/img/github.png" class="w-16 h-18" alt="GitHub">
        </div>
        <div>Github</div>
      </div>
      <div class="flex items-center mb-4">
        <div class="mr-4">
          <img src="/assets/img/gmail.png" class="w-16 h-18" alt="Gmail">
        </div>
        <div>Gmail</div>
      </div>
      <div class="flex items-center">
        <div class="mr-4">
          <img src="/assets/img/linkedin.png" class="w-16 h-18" alt="LinkedIn">
        </div>
        <div>LinkedIn</div>
      </div>
    </div>
  </div>

</template>

<style>
body {
  overflow-y: hidden;
}

.dark-theme {

}
</style>

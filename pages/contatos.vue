<script setup lang="ts">
import { lightDark } from '../sharedTheme';
</script>

<template>
  <Nav></Nav>
  <div :class="{ 'dark-theme': lightDark }" class="flex items-center justify-center h-screen">
    <div class="w-[350px] h-auto p-4 border bg-white text-black border-gray-300 rounded-lg">
      <div class="flex items-center mb-4">
        <div class="mr-4">
          <img src="/assets/img/github.png" class="w-16 h-18" alt="GitHub">
        </div>
        <div>
          <a target="_blank" href="https://github.com/OMateusSO?tab=repositories" class="hover:text-blue-600">Github</a>
        </div>
      </div>
      <div class="flex items-center mb-4">
        <div class="mr-4">
          <img src="/assets/img/gmail.png" class="w-16 h-18" alt="Gmail">
        </div>
        <div>
          <a target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mateuswy123@gmail.com&su=" 
          class="hover:text-blue-600">
            Gmail
          </a>
        </div>
      </div>
      <div class="flex items-center">
        <div class="mr-4">
          <img src="/assets/img/linkedin.png" class="w-16 h-18" alt="LinkedIn">
        </div>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/mateus-sousa-basilio-a0097b217/" 
          class="hover:text-blue-600">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
body {
  overflow-y: hidden;
}
</style>

<template>
  <Nav></Nav>
  <div :class="{ 'dark-theme': lightDark }" class="flex items-center justify-center h-screen">
    <button class=" bg-blue-600 text-white rounded-lg hover:bg-blue-500 py-2 px-4" @click="bntSaibaMais">
      Saiba mais
    </button>
  </div>
</template>

<script setup lang="ts">
import { lightDark } from '../sharedTheme';
import { useRouter } from 'vue-router';

const router = useRouter();

function bntSaibaMais() {
  router.push('/home');
}
</script>

<style>
.dark-theme {
  background-color: #050913fa;
  
}
</style>

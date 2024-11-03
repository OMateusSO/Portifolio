<template>
  <div :class="{ 'dark-theme': lightDark }" class="hidden h-full flex-col md:flex">
    <div class="container flex flex-col items-start justify-between space-y-2 py-8 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
      <router-link to="/" class="text-black text-2xl lg:text-1xl font-bold">OMateusSO</router-link>
      
      <div class="ml-auto flex w-full space-x-2 sm:justify-end">
        <div>
          <button @click="bntProjetos" class="py-3 px-4 shadow-md rounded-md text-gray-600 transition duration-300 ease-in-out">
            Projetos
          </button>
        </div>
        <div>
          <button @click="bntContatos" class=" py-3 px-5 shadow-md rounded-md text-gray-600 transition duration-300 ease-in-out">
            Sobre
          </button>
        </div>
        <div class="m-2.5">
          <DarkModeSwitch></DarkModeSwitch>
        </div>
      </div>
    </div>
    <div :class="{ 'border-t border-gray-300': !lightDark, 'border-t border-gray-700': lightDark }"></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { lightDark } from '../sharedTheme';

const router = useRouter();

function bntContatos() {
  router.push('/sobre-mim');
}

function bntProjetos() {
  router.push('/projetos');
}
</script>

<style scoped>

.dark-theme a {
  color: rgb(255, 255, 255);
}

</style>

<template>
  <div :class="{ 'dark-theme': lightDark }" class="flex flex-col md:flex">
    <!-- Navbar para desktop -->
    <div
      class="container hidden md:flex flex-col items-start justify-between space-y-2 py-8 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
      <router-link to="/" class="text-black text-2xl lg:text-1xl font-bold">OMateusSO</router-link>
      <div class="ml-auto flex w-full space-x-2 sm:justify-end">
        <div>
          <button @click="bntProjetos"
            class="py-3 px-4 shadow-md rounded-md text-gray-600 transition duration-300 ease-in-out">
            Projetos
          </button>
        </div>
        <div>
          <button @click="bntContatos"
            class="py-3 px-5 shadow-md rounded-md text-gray-600 transition duration-300 ease-in-out">
            Sobre
          </button>
        </div>
        <div class="m-2.5">
          <DarkModeSwitch></DarkModeSwitch>
        </div>
      </div>
    </div>

    <!-- Menu para dispositivos móveis -->
    <div class="md:hidden flex items-center justify-between py-4 px-6">
      <button @click="toggleMenu" class="text-gray-600 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <router-link to="/" class="text-black text-2xl font-bold">OMateusSO</router-link>
      <div class="m-2.5">
        <DarkModeSwitch></DarkModeSwitch>
      </div>
    </div>

    <!-- Menu expandido para dispositivos móveis -->
    <transition name="fade">
      <div v-if="menuOpen"
        class="flex flex-col items-start bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700">
        <button @click="bntProjetos"
          class="py-3 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
          Projetos
        </button>
        <button @click="bntContatos"
          class="py-3 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
          Sobre
        </button>
      </div>
    </transition>

    <div :class="{ 'border-t border-gray-300': !lightDark, 'border-t border-gray-700': lightDark }"></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { lightDark } from '../sharedTheme';
import { ref } from 'vue';

const router = useRouter();
const menuOpen = ref(false);

function bntContatos() {
  router.push('/sobre-mim');
}

function bntProjetos() {
  router.push('/projetos');
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<style scoped>
.dark-theme a {
  color: rgb(255, 255, 255);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active em versões <2.1.8 */
  {
  opacity: 0;
}
</style>

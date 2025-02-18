<template>
  <div :class="{ 'dark-theme': lightDark }" class="flex flex-col md:flex">
    <!-- Navbar para desktop -->
    <div class="container hidden md:flex flex-col items-start justify-between space-y-2 py-8 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
      <router-link to="/" class="text-black text-2xl lg:text-1xl font-bold">OMateusSO</router-link>
      <div class="ml-auto flex w-full space-x-2 sm:justify-end">
        <div>
          <button @click="bntProjetos" class="py-3 px-4 shadow-md rounded-md text-gray-600 transition duration-300 ease-in-out">
            Projetos
          </button>
        </div>
        <div>
          <button @click="bntContatos" class="py-3 px-5 shadow-md rounded-md text-gray-600 transition duration-300 ease-in-out">
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
      <div v-if="menuOpen" class="flex flex-col items-center justify-center border-t border-gray-300"
        :class="{ 'bg-white': !lightDark, 'border-gray-700': lightDark }">
        <div class="w-full grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] sm:grid-cols-2 sm:gap-4">
          <button @click="bntHome">
            <div
              :class="{ 'bg-gradient-to-b from-muted/50 to-muted': !lightDark, 'dark: bg-gradient-to-b from-muted/5 to-black': lightDark }"
              class="flex flex-col rounded-md p-6 sm:col-span-2">
              Home
              <p class="text-sm leading-tight text-muted-foreground dark:text-gray-300">
                Volte a pagina inicial.
              </p>
            </div>
          </button>

          <div class="grid grid-cols-2 sm:col-span-2 gap-3 w-full">
            <!-- Projeto link -->
            <button @click="bntProjetos">
              <div
                :class="{ 'bg-gradient-to-b from-muted/50 to-muted': !lightDark, 'dark: dark: bg-gradient-to-b from-muted/5 to-black': lightDark }"
                class="flex flex-col rounded-md p-6">
                Projetos
                <p class="text-sm leading-tight text-muted-foreground dark:text-gray-300">
                  Veja alguns dos meus projetos.
                </p>
              </div>
            </button>
            <!-- Sobre-Mim link -->
            <button @click="bntContatos">
              <div
                :class="{ 'bg-gradient-to-b from-muted/50 to-muted': !lightDark, 'dark: dark: bg-gradient-to-b from-muted/5 to-black': lightDark }"
                class="flex flex-col rounded-md p-6">
                Sobre-Mim
                <p class="text-sm leading-tight text-muted-foreground dark:text-gray-300">
                  Conheça mais sobre mim.
                </p>
              </div>
            </button>
          </div>

        </div>

      </div>
    </transition>

    <div :class="{ 'border-t border-gray-300': !lightDark, 'border-t border-gray-700': lightDark }"></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { lightDark } from '../sharedTheme';
import { ref, onMounted } from 'vue';

const router = useRouter();
const menuOpen = ref(false);

function bntContatos() {
  router.push('/sobre-mim');
}

function bntProjetos() {
  router.push('/projetos');
}

function bntHome() {
  router.push('/');
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      menuOpen.value = false;  
    }
  };
  
  window.addEventListener('resize', handleResize);
  
  handleResize();
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
});
</script>

<style scoped>
.dark-theme a {
  color: rgb(255, 255, 255);
}

/* Transição suave para o menu expandido */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

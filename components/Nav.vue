<template>
  <div :class="{ 'dark-theme': lightDark }">

    <div class="fixed top-0 left-0 w-full z-50 transition-all duration-300" :class="[
      scrolled
        ? lightDark
          ? 'bg-black/70 backdrop-blur-md shadow-md'
          : 'bg-white/70 backdrop-blur-md shadow-md'
        : lightDark
          ? 'bg-black'
          : 'bg-white',
    ]">


      <div class="flex flex-col">

        <!-- desktop -->
        <div class="container hidden md:flex items-center justify-between py-8 md:h-16 relative">
          <router-link to="/" class="text-black dark:text-white text-2xl font-bold">
            OMateusSO
          </router-link>

          <div class="absolute left-1/2 -translate-x-1/2 flex space-x-6">
            <button @click="bntHome" class="text-gray-600 dark:text-gray-300 hover:text-yellow-200 dark:hover:text-blue-700 transition">
              {{ $t('nav.home') }}
            </button>

            <button @click="bntProjetos" class="text-gray-600 dark:text-gray-300 hover:text-yellow-200 dark:hover:text-blue-700 transition">
              {{ $t('nav.projects') }}
            </button>

            <button @click="bntContatos" class="text-gray-600 dark:text-gray-300 hover:text-yellow-200 dark:hover:text-blue-700 transition">
              {{ $t('nav.contact') }}
            </button>
          </div>


          <!-- DIREITA -->
          <div class="flex items-center gap-4">
            <IdiomaSwitch />
            <DarkModeSwitch />
          </div>

        </div>

        <!-- Navbar mobile -->
        <div class="md:hidden flex items-center justify-between py-4 px-6">
          <button @click="toggleMenu" class="text-gray-600 dark:text-gray-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <router-link to="/" class="text-black dark:text-white text-2xl font-bold">
            OMateusSO
          </router-link>

          <div class="m-2.5">
            <DarkModeSwitch />
          </div>
        </div>

        <!-- Menu mobile expandido -->
        <transition name="fade">
          <div v-if="menuOpen"
            class="flex flex-col items-center justify-center border-t border-gray-300 dark:border-gray-700">
            <div class="w-full grid gap-3 p-4 md:w-[400px] sm:grid-cols-2">
              <button @click="bntHome" class="rounded-md p-6 bg-muted/50 dark:bg-black/40">
                Home
              </button>

              <button @click="bntProjetos" class="rounded-md p-6 bg-muted/50 dark:bg-black/40">
                Projetos
              </button>

              <button @click="bntContatos" class="rounded-md p-6 bg-muted/50 dark:bg-black/40 sm:col-span-2">
                Contato
              </button>
            </div>
          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { lightDark } from '../sharedTheme'
import { ref, onMounted } from 'vue'


const router = useRouter()
const menuOpen = ref(false)
const scrolled = ref(false)

function bntContatos() {
  router.push('/contato')
}

function bntProjetos() {
  router.push('/projetos')
}

function bntHome() {
  router.push('/')
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 10
  }

  window.addEventListener('scroll', onScroll)

  return () => {
    window.removeEventListener('scroll', onScroll)
  }
})
</script>

<style scoped>
.dark-theme a {
  color: white;
}

/* animação menu mobile */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

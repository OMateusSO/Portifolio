<template>
  <div>
    <div class="fixed top-0 left-0 w-full z-50 transition-colors duration-300 transition-shadow
             bg-white dark:bg-black"
      :class="scrolled ? 'bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-md' : ''">
      <div class="flex flex-col">

        <div class="container hidden md:flex items-center justify-between py-8 md:h-16 relative">
          <router-link to="/" class="text-black dark:text-white text-2xl font-bold">
            <img src="/assets/img/Logo.png" alt="Logo MateusS" class="w-48 h-auto" />
          </router-link>

          <div class="absolute left-1/2 -translate-x-1/2 flex space-x-6">
            <button @click="bntHome"
              class="text-gray-600 dark:text-gray-300 hover:text-yellow-200 dark:hover:text-blue-700 transition">
              {{ $t('nav.home') }}
            </button>
            <button @click="bntProjetos"
              class="text-gray-600 dark:text-gray-300 hover:text-yellow-200 dark:hover:text-blue-700 transition">
              {{ $t('nav.projects') }}
            </button>
            <button @click="bntContatos"
              class="text-gray-600 dark:text-gray-300 hover:text-yellow-200 dark:hover:text-blue-700 transition">
              {{ $t('nav.contact') }}
            </button>
          </div>

          <div class="flex items-center gap-4">
            <IdiomaSwitch />
            <DarkModeSwitch />
          </div>
        </div>

        <!-- Mobile -->
        <div class="md:hidden flex items-center justify-between py-1 px-6">
          <button @click="toggleMenu" class="text-gray-600 dark:text-gray-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <router-link to="/" class="text-black dark:text-white text-2xl font-bold">
            <img src="/assets/img/Logo.png" alt="Logo MateusS" class="w-48 h-auto" />
          </router-link>

          <div class="flex items-center gap-2">
            <IdiomaSwitch />
            <DarkModeSwitch />
          </div>
        </div>

        <transition name="fade">
          <div v-if="menuOpen"
            class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex justify-center items-start pt-20"
            @click.self="menuOpen = false">

            <div class="relative bg-white dark:bg-black rounded-xl shadow-xl w-11/12 max-w-sm p-6 flex flex-col gap-4">
              <button @click="menuOpen = false"
                class="absolute -top-10 right-0 text-gray-700 dark:text-gray-300 hover:text-blue-400 transition text-2xl font-bold">
                ✕
              </button>
              <button @click="bntHome" class="p-6 flex items-center justify-center gap-4 border shadow-md transition-all duration-300 
                     hover:scale-105 group rounded-xl
                     bg-white text-gray-800 border-gray-200
                     hover:shadow-[0_0_15px_rgba(0,0,0,0.15)]
                     dark:bg-gradient-to-br dark:from-[#050b1a] dark:via-[#0a1733] dark:to-[#0f2357]
                     dark:text-blue-100 dark:border-blue-900/40
                     dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]">
                Home
              </button>
              <button @click="bntProjetos" class="p-6 flex items-center justify-center gap-4 border shadow-md transition-all duration-300 
                     hover:scale-105 group rounded-xl
                     bg-white text-gray-800 border-gray-200
                     hover:shadow-[0_0_15px_rgba(0,0,0,0.15)]
                     dark:bg-gradient-to-br dark:from-[#050b1a] dark:via-[#0a1733] dark:to-[#0f2357]
                     dark:text-blue-100 dark:border-blue-900/40
                     dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]">
                Projetos
              </button>
              <button @click="bntContatos" class="p-6 flex items-center justify-center gap-4 border shadow-md transition-all duration-300 
                     hover:scale-105 group rounded-xl
                     bg-white text-gray-800 border-gray-200
                     hover:shadow-[0_0_15px_rgba(0,0,0,0.15)]
                     dark:bg-gradient-to-br dark:from-[#050b1a] dark:via-[#0a1733] dark:to-[#0f2357]
                     dark:text-blue-100 dark:border-blue-900/40
                     dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]">
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
import { ref, onMounted } from 'vue'

const router = useRouter()
const menuOpen = ref(false)
const scrolled = ref(false)

function bntContatos() { router.push('/contato') }
function bntProjetos() { router.push('/projetos') }
function bntHome() { router.push('/') }
function toggleMenu() { menuOpen.value = !menuOpen.value }

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 10 }
  window.addEventListener('scroll', onScroll)
  return () => { window.removeEventListener('scroll', onScroll) }
})
</script>

<style scoped>
/* Animação do fade + deslize */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Botões do menu mobile */
.mobile-btn {
  width: 100%;
  padding: 1rem;
  border-radius: 0.75rem;
  font-weight: 500;
  color: white;
  background: linear-gradient(to right, #22d3ee, #3b82f6);
  /* Azul hero do site */
  transition: all 0.3s ease;
  text-align: center;
}

.mobile-btn:hover {
  background: linear-gradient(to right, #0ea5e9, #2563eb);
  color: white;
}
</style>

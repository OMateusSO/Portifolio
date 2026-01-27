<template>
  <div
    class="w-full min-h-screen flex flex-col items-center justify-center px-6 bg-white text-gray-900 dark:bg-black dark:text-white">

    <section class="max-w-5xl w-full space-y-8 -translate-y-12">
      <h1 class="text-4xl font-bold text-center">
        Minhas redes
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener"
          class="cursor-pointer rounded-2xl overflow-hidden
                 p-6 flex items-center gap-4
                 border shadow-md transition-all duration-300
                 hover:scale-105 group

                 bg-white text-gray-800 border-gray-200
                 hover:shadow-[0_0_15px_rgba(0,0,0,0.15)]

                 dark:bg-gradient-to-br dark:from-[#050b1a] dark:via-[#0a1733] dark:to-[#0f2357]
                 dark:text-blue-100 dark:border-blue-900/40
                 dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]">

          <div class="text-3xl transition group-hover:scale-110">
            {{ social.icon }}
          </div>

          <div class="text-left">
            <p class="font-semibold text-lg">
              {{ social.name }}
            </p>
            <p class="text-sm text-gray-500 dark:text-blue-300">
              {{ social.username }}
            </p>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const socials = [
  {
    name: 'GitHub',
    username: '@OMateusSO',
    url: 'https://github.com/OMateusSO',
    icon: '🐙'
  },
  {
    name: 'LinkedIn',
    username: 'Mateus Sousa Basilio',
    url: 'https://www.linkedin.com/in/mateus-sousa-basilio',
    icon: '💼'
  },
  {
    name: 'Instagram',
    username: '@omateus_so',
    url: 'https://instagram.com/omateus_so',
    icon: '📸'
  },
  {
    name: 'Discord',
    username: 'omateusso',
    icon: '🎮'
  },
  {
    name: 'Telegram',
    username: '+55 27 98896-3093',
    icon: '📨'
  },
  {
    name: 'Gmail',
    username: 'mateuswy123@gmail.com',
    url: 'mailto:mateuswy123@gmail.com',
    icon: '✉️'
  }
]

</script>




<style></style>
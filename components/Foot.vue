<template>
  <footer class="w-full transition-all duration-300" :class="lightDark
    ? 'bg-gradient-to-br from-[#050b1a] via-[#0a1733] to-[#0f2357] text-blue-100 border-t border-blue-900/40 shadow-[0_-10px_30px_rgba(37,99,235,0.25)]'
    : 'bg-white text-gray-800 border-t border-gray-200 shadow-sm'">

    <div class="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 class="text-xl font-bold mb-4">
          {{ $t('footer.brand') }}
        </h2>

        <p class="text-sm opacity-70">
          {{ $t('footer.rights') }}
        </p>
      </div>

      <div class="flex flex-col items-center">
        <h2 class="text-xl font-bold mb-4">
          {{ $t('footer.pagesTitle') }}
        </h2>

        <ul class="space-y-2">
          <li>
            <a href="/" class="hover:text-blue-400 transition-colors">
              {{ $t('footer.pages.home') }}
            </a>
          </li>
          <li>
            <a href="/projetos" class="hover:text-blue-400 transition-colors">
              {{ $t('footer.pages.projects') }}
            </a>
          </li>
          <li>
            <a href="/sobre-mim" class="hover:text-blue-400 transition-colors">
              {{ $t('footer.pages.contact') }}
            </a>
          </li>
        </ul>
      </div>

      <div class="flex flex-col items-center text-center">
        <h2 class="text-xl font-bold mb-4">
          {{ $t('footer.connectTitle') }}
        </h2>
        <div class="flex gap-6 justify-center">
          <a href="https://github.com/OMateusSO?tab=repositories" target="_blank"
            class="hover:scale-110 transition-transform">
            <img src="/assets/img/github.png" alt="GitHub" class="w-12 h-12">
          </a>

          <a href="mailto:mateuswy123@gmail.com" target="_blank" class="hover:scale-110 transition-transform">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail"
              class="w-12 h-12">
          </a>

          <a href="https://www.linkedin.com/in/mateus-sousa-basilio-a0097b217/" target="_blank"
            class="hover:scale-110 transition-transform">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn"
              class="w-12 h-12">
          </a>

          <a href="https://wa.me/5527988963093" target="_blank" class="hover:scale-110 transition-transform">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"
              class="w-12 h-12">
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { lightDark } from '../sharedTheme'
</script>

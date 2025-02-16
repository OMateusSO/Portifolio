<template>
  <div class="w-8 h-8 flex items-center justify-center">
    <img 
      :src="lightDark ? solImg : luaImg" 
      :class="[ 
        'cursor-pointer transition-transform duration-300 hover:scale-110', 
        lightDark ? 'w-8 h-8' : 'w-6 h-6',
        lightDark ? 'hover:animate-sun' : 'hover:animate-moon'
      ]"
      alt="Alternar tema"
      @click="lightDark = !lightDark"
    />
  </div>
</template>

<script setup lang="ts">
import { lightDark } from '../sharedTheme';

// Importando as imagens corretamente
import solImg from '@/assets/img/sol1.png';
import luaImg from '@/assets/img/lua1.png';
</script>

<style scoped>

/* Animação para o brilho + rotação do Sol */
@keyframes sun {
  0% {
    filter: brightness(1) saturate(100%) hue-rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    filter: brightness(0) saturate(100%) invert(92%) sepia(81%) 
          saturate(600%) hue-rotate(10deg) brightness(120%) contrast(110%);
    transform: rotate(360deg);
  }
}

.hover\:animate-sun:hover {
  animation: sun 0.5s ease-in-out forwards;
}

/* 🌙 Animação para a Lua */
@keyframes moon {
  0% {
    transform: rotate(0deg);
  }
  100% {
    filter: brightness(1) invert(1); 
    transform: rotate(360deg);
  }
}

.hover\:animate-moon:hover {
  animation: moon 0.5s ease-in-out forwards;
}
</style>

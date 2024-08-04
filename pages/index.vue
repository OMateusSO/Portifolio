<script setup lang="ts">
import { lightDark } from '../sharedTheme';
import Foot from '../components/Foot.vue';
</script>

<template>
  <Nav></Nav>
  <div :class="{ 'dark-theme': lightDark }" class="relative">
    <video v-if="lightDark" src="/assets/videos/0701(1).mp4" class="video-bg" autoplay loop plays-inline muted></video>
    <div class="content">
      <div class="flex items-center justify-center p-16">
        <h1 class="text-6xl">Olá, bem-vindo ao meu Portfólio!</h1>
      </div>
      <div class="flex items-center justify-center">
        <button class="bg-blue-600 text-white rounded-lg hover:bg-blue-500 py-2 px-4">
          Baixar
        </button>
      </div>
    </div>
  </div>
  <Foot></Foot>
</template>

<style>
.dark-theme {
  /* Adicione seu estilo específico para o tema escuro aqui */
}

.video-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.7;
  filter: brightness(1.2) contrast(1.2);
}

.content {
  position: relative;
  z-index: 1;
  min-height: 100vh; /* Para garantir que o conteúdo preencha pelo menos a tela inteira */
}
</style>
<script setup lang="ts">
import { lightDark } from '../sharedTheme';
import Nav from './components/Nav.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function Voltar() {
  router.push('/');
}
</script>

<template>
  <Nav></Nav>
  <div :class="{ 'dark-theme': lightDark }" class="relative">
    <video v-if="lightDark" src="/assets/videos/0701(1).mp4" class="video-bg" autoplay loop plays-inline muted></video>
    <div class="content">
      <div class="flex flex-col justify-center items-center p-16">
        <h1 class="text-7xl m-2">Página Não Encontrada</h1>
        <div class="flex justify-center items-center mt-16">
          <button @click="Voltar" class=" bg-blue-600 text-white rounded-lg hover:bg-blue-500 py-2 px-4">
            voltar
          </button>
        </div>
      </div>
    </div>
  </div>
  <Foot></Foot>
</template>

<style>
.dark-theme {
  background-color: #030303ea;
  color: white;
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

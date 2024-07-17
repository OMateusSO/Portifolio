<template>
  <Nav></Nav>
  <div :class="{ 'dark-theme': lightDark }" class="relative">
    <video v-if="lightDark" src="/assets/videos/0701(1).mp4" class="video-bg" autoplay loop plays-inline muted></video>
    <div class="content">
      <div class="p-4">
        <h1 class="text-3xl text-center">Meus Projetos</h1>
      </div>
      <div class="flex items-center justify-center">
        <div class="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-black">
          <div class="card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md" @click="SistemaLogin">
            <h2 class="text-xl font-bold mb-2">Sistema de Login</h2>
            <p class="text-gray-700 dark:text-gray-300">Descrição do card 1</p>
          </div>
          <div class="card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md" @click="Chat">
            <h2 class="text-xl font-bold mb-2">Chat</h2>
            <p class="text-gray-700 dark:text-gray-300">Descrição do card 2</p>
          </div>
          <div class="card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-2">Card 3</h2>
            <p class="text-gray-700 dark:text-gray-300">Descrição do card 3</p>
          </div>
          <!-- Repetição dos cards omitida para brevidade -->
        </div>
      </div>
      <div class="p-4">
        <h1 class="text-3xl text-center">Video de trabalhos e Projetos</h1>
      </div>
      <div class="p-4 max-w-screen-sm mx-auto">
        <video src="/assets/videos/Protifole.mp4" class="w-full" controls autoplay muted></video>
      </div>
    </div>
    <Foot class="transparent-footer"></Foot>
  </div>
</template>

<script setup lang="ts">
import { lightDark } from '@/sharedTheme';
import { useRouter } from 'vue-router';

const router = useRouter();

function SistemaLogin() {
  router.push('/projetos/Sistema_de_Login');
}

function Chat() {
  router.push('/projetos/chat');
}

function Projeto3() {
  router.push('/projetos/chat');
}
</script>

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

.cards-container {
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

/* Estilo para o footer transparente */
.transparent-footer {
  background-color: transparent;
}
</style>

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
  <div :class="{ 'dark-theme': lightDark }" class="flex flex-col justify-center items-center min-h-screen py-8 bg-gray-100 dark:bg-gray-900">
    <div class="content text-center">
      <h1 class="text-5xl lg:text-6xl font-bold m-2">Página Não Encontrada</h1>
      <p class="text-xl m-8">Desculpe, mas a página que você está procurando não existe.</p>
      <div class="flex justify-center m-8">
        <button @click="Voltar" class="bg-blue-600 text-white rounded-lg hover:bg-blue-500 py-2 px-6 text-lg font-semibold">
          Voltar para a página inicial
        </button>
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

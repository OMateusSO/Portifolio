<template>
  <div :class="{ 'dark-theme': lightDark }" class="w-full min-h-screen flex flex-col items-center justify-start px-6 py-16">
    <div class="content w-full max-w-6xl mx-auto p-4 lg:p-8">
      <div class="py-4 text-center">
        <h1 class="text-3xl lg:text-5xl font-bold dark:text-white">WebChat</h1>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Sobre o Projeto</h2>
        <p class="text-gray-700 dark:text-gray-300">
          WebChat é uma aplicação web desenvolvida com Vue.js, utilizando Firebase para backend e banco de dados, e
          estilizada com Tailwind CSS para uma interface moderna e responsiva. Este projeto permite a criação e gestão
          de salas de bate-papo em tempo real.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Tecnologias Utilizadas</h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li><strong>Vue.js:</strong> Framework JavaScript progressivo para construção de interfaces interativas.</li>
          <li><strong>Firebase:</strong> Plataforma para autenticação, banco de dados em tempo real e hospedagem.</li>
          <li><strong>Tailwind CSS:</strong> Framework CSS utilitário para estilização rápida e responsiva.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Funcionalidades</h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li><strong>Autenticação:</strong> Gerenciada com o Firebase Auth para login seguro.</li>
          <li><strong>Criação de Salas:</strong> Usuários podem criar salas de bate-papo.</li>
          <li><strong>Mensagens em Tempo Real:</strong> Bate-papo em tempo real com sincronização instantânea via
            Firebase Firestore.</li>
          <li><strong>Interface Responsiva:</strong> Design otimizado para diferentes tamanhos de tela.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Repositório no GitHub</h2>
        <div>
          <a href="https://github.com/OMateusSO/RedeSocial-Firebase" target="_blank"
            class="text-blue-600 hover:text-blue-800 transition-colors">
            https://github.com/OMateusSO/WebChat
          </a>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Demonstração</h2>
        <div class="flex justify-center">
          <div class="max-w-screen-md w-full">
            <video src="/videos/ProjetoZ.mp4" class="w-full rounded-lg shadow-md" controls muted></video>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { lightDark } from '@/sharedTheme';
</script>

<style scoped>
.content {
  position: relative;
  z-index: 1;
}

a {
  text-decoration: none;
}
</style>

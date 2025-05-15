<template>
  <Nav />
  <div :class="{ 'dark-theme': lightDark }" class="relative min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
    <div class="content w-full max-w-6xl mx-auto p-4 lg:p-8">
      <!-- Título da página -->
      <div class="py-4 text-center">
        <h1 class="text-3xl lg:text-5xl font-bold dark:text-white">Biblioteca</h1>
      </div>

      <!-- Descrição do projeto -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Sobre o Projeto</h2>
        <p class="text-gray-700 dark:text-gray-300">
          O Sistema de Biblioteca é uma aplicação web desenvolvida com Vue.js e TypeScript, projetada para facilitar a gestão de empréstimos de livros em uma biblioteca escolar ou institucional. Ele integra um banco de dados relacional MySQL com Prisma e permite a automação de operações com QR Codes.
        </p>
      </div>

      <!-- Tecnologias Utilizadas -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Tecnologias Utilizadas</h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li><strong>Vue.js:</strong> Framework JavaScript progressivo para a construção da interface do usuário.</li>
          <li><strong>TypeScript:</strong> Superset de JavaScript que adiciona tipagem estática ao código.</li>
          <li><strong>Tailwind CSS:</strong> Framework CSS utilitário para estilização rápida e responsiva.</li>
          <li><strong>MySQL:</strong> Sistema de banco de dados relacional robusto.</li>
          <li><strong>Prisma ORM:</strong> Ferramenta de mapeamento objeto-relacional para integração com MySQL.</li>
          <li><strong>QRCode:</strong> Biblioteca para geração de QR Codes que identificam livros de forma única.</li>
        </ul>
      </div>

      <!-- Funcionalidades -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Funcionalidades</h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li><strong>Cadastro de Livros:</strong> Interface para adicionar novos livros com geração automática de QR Code.</li>
          <li><strong>Empréstimos:</strong> Registro de empréstimos vinculados a usuários e livros.</li>
          <li><strong>Leitura de QR Code:</strong> Scanner integrado para automatizar o processo de empréstimo.</li>
          <li><strong>Gestão de Usuários:</strong> Administração de quem pega emprestado os livros.</li>
          <li><strong>Responsividade:</strong> Interface adaptável a diferentes tamanhos de tela.</li>
        </ul>
      </div>

      <!-- Link para o GitHub -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Repositório no GitHub</h2>
        <div>
          <a href="https://github.com/OMateusSO/Biblioteca" target="_blank"
            class="text-blue-600 hover:text-blue-800 transition-colors">
            https://github.com/OMateusSO/Biblioteca
          </a>
        </div>
      </div>

      <!-- Seção de vídeo ou imagem -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Demonstração</h2>
        <div class="flex justify-center">
          <div class="max-w-screen-md w-full">
            <video src="/assets/videos/0514.mp4" class="w-full rounded-lg shadow-md" controls muted></video>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Foot />
</template>

<script setup lang="ts">
import { lightDark } from '@/sharedTheme';
</script>

<style scoped>
.content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

a {
  text-decoration: none;
}
</style>

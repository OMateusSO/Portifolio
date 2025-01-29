<template>
  <Nav />
  <div :class="{ 'dark-theme': lightDark }" class="relative min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
    <div class="content w-full max-w-6xl mx-auto p-4 lg:p-8">
      <!-- Título da página -->
      <div class="py-4 text-center">
        <h1 class="text-3xl lg:text-5xl font-bold dark:text-white">Sistema de Login</h1>
      </div>

      <!-- Descrição do Projeto -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Sobre o Projeto</h2>
        <p class="text-gray-700 dark:text-gray-300">
          O Sistema de Login é uma aplicação web desenvolvida com Vue.js, Firebase e Tailwind CSS, projetada para
          fornecer autenticação segura e gerenciamento de usuários. Ele é uma peça fundamental em outros projetos, como
          o 
          <router-link to="/projetos/projetoZ" class=" hover:text-blue-800 underline"><strong>Projeto-Z</strong></router-link>, oferecendo suporte confiável para controle de acesso.
        </p>
      </div>

      <!-- Tecnologias Utilizadas -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Tecnologias Utilizadas</h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li><strong>Vue.js:</strong> Framework JavaScript progressivo para construção de interfaces interativas.</li>
          <li><strong>Firebase:</strong> Plataforma para autenticação, banco de dados em tempo real e hospedagem.</li>
          <li><strong>Tailwind CSS:</strong> Framework CSS utilitário para estilização rápida e responsiva.</li>
        </ul>
      </div>

      <!-- Funcionalidades -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Funcionalidades</h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li><strong>Login Seguro:</strong> Gerenciado com Firebase Auth para autenticação robusta.</li>
          <li><strong>Cadastro de Usuários:</strong> Permite criação de contas com validação.</li>
          <!-- <li><strong>Redefinição de Senha:</strong> Recuperação de acesso por e-mail.</li> -->
          <li><strong>Customização:</strong> Fácil integração com outros sistemas, como o Projeto-Z.</li>
        </ul>
      </div>

      <!-- Repositório no GitHub -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Repositório no GitHub</h2>
        <div class="">
          <a href="https://github.com/OMateusSO/Auth-Firebase" target="_blank"
            class="text-blue-600 hover:text-blue-800 transition-colors">
            https://github.com/OMateusSO/Auth-Firebase
          </a>
        </div>
      </div>

      <!-- Demonstração -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">Demonstração</h2>
        <div class="flex justify-center">
          <div class="max-w-screen-md w-full">
            <video src="/assets/videos/0109.mp4" class="w-full rounded-lg shadow-md" controls></video>
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

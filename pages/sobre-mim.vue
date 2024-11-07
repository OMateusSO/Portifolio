<template>
  <Nav />
  <div :class="{ 'dark-theme': lightDark }" class="flex flex-col items-center min-h-screen py-12 bg-gray-100 dark:bg-gray-900">
    <div class="text-center mb-8">
      <h1 class="text-5xl lg:text-6xl font-bold  dark:text-white">Sobre Mim</h1>
    </div>

    <!-- Card Principal -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto text-center md:flex md:text-left md:items-center">
      <!-- Foto de Perfil -->
      <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
        <img src="/assets/img/Design sem nome (1).png" class="w-40 h-40 rounded-full border-4 object-cover" alt="Foto de perfil">
      </div>
      
      <!-- Informações -->
      <div class="space-y-4">
        <h2 class="text-3xl font-semibold text-gray-800 dark:text-white">Mateus Sousa Basilio</h2>
        <h3 class="text-lg text-blue-600 dark:text-blue-400">Desenvolvedor Web</h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          Tenho {{ idade }} anos, sou formado em Análise e Desenvolvimento de Sistemas e estou em busca de oportunidades para superar desafios, aplicar minhas habilidades e contribuir ativamente enquanto aprendo. Procuro um ambiente que valorize a inovação e o crescimento, onde eu possa evoluir e agregar valor ao time.
        </p>
      </div>
    </div>

    <!-- Links e Tecnologias -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 w-full max-w-4xl">
      <!-- Links de Contato -->
      <div class="card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h3 class="text-2xl text-gray-700 dark:text-blue-400 mb-4">Links de Contato</h3>
        <div class="flex flex-col space-y-4 text-blue-600 dark:text-blue-400">
          <a href="https://github.com/OMateusSO?tab=repositories" target="_blank" class="flex items-center space-x-2 hover:text-blue-800 dark:hover:text-red-400">
            <img src="/assets/img/github.png" class="w-8 h-9" alt="GitHub">
            <span>GitHub</span>
          </a>
          <a href="mailto:mateuswy123@gmail.com" target="_blank" class="flex items-center space-x-2 hover:text-blue-800 dark:hover:text-red-400">
            <img src="/assets/img/gmail.png" class="w-8 h-9" alt="Gmail">
            <span>Gmail</span>
          </a>
          <a href="https://www.linkedin.com/in/mateus-sousa-basilio-a0097b217/" target="_blank" class="flex items-center space-x-2 hover:text-blue-800 dark:hover:text-red-400">
            <img src="/assets/img/linkedin.png" class="w-9 h-9" alt="LinkedIn">
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <!-- Tecnologias -->
      <div class="card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h3 class="text-2xl text-gray-700 dark:text-blue-400 mb-4">Tecnologias</h3>
        <ul class="text-gray-600 dark:text-gray-300 list-disc list-inside">
          <li>Vue.js</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Git/GitHub/GitLab</li>
        </ul>
      </div>
    </div>
  </div>
  <Foot />
</template>

<script setup lang="ts">
import { lightDark } from '@/sharedTheme';

function calcularIdade(dataNascimento: string): number {
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  if (hoje.getMonth() < nascimento.getMonth() || (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

const idade = calcularIdade("2002-12-18");
</script>

<style>
.dark-theme h1 {
  
}

.dark-theme h3 {
  color: #3b82f6;
}
</style>

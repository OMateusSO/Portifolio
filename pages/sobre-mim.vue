<template>
  <Nav />
  <div :class="{ 'dark-theme': lightDark }" class="flex flex-col items-center min-h-screen py-12 px-4 bg-gray-100 transition-colors duration-300">
    <div class="text-center mb-10">
      <h1 class="text-4xl lg:text-5xl font-bold dark:text-white transition-all duration-500">Sobre Mim</h1>
    </div>

    <!-- Card Principal -->
    <div :class="{'bg-white': !lightDark, 'dark:bg-gray-700': lightDark}" class="rounded-lg shadow-lg p-6 max-w-xl md:max-w-4xl mx-auto text-center md:text-left md:flex md:items-center md:space-x-6 transition-colors duration-500">
      <!-- Foto de Perfil -->
      <div class="justify-center flex-shrink-0 flex md:justify-center mb-6 md:mb-0">
        <img src="/assets/img/Design sem nome (1).png" class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-800 object-cover shadow-md" alt="Foto de perfil">
      </div>
      
      <!-- Informações -->
      <div class="space-y-4 text-center md:text-left">
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white transition-all duration-500">Mateus Sousa Basilio</h2>
        <h3 class="text-md md:text-lg text-blue-600 dark:text-blue-400">Desenvolvedor Web</h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          Tenho {{ idade }} anos, sou formado em Análise e Desenvolvimento de Sistemas e estou em busca de oportunidades para superar desafios, aplicar minhas habilidades e contribuir ativamente enquanto aprendo. Procuro um ambiente que valorize a inovação e o crescimento, onde eu possa evoluir e agregar valor ao time.
        </p>
      </div>
    </div>

    <!-- Links e Tecnologias -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full max-w-xl md:max-w-4xl">
      <!-- Links de Contato -->
      <div :class="{'bg-white': !lightDark, 'dark:bg-gray-700': lightDark}" class="card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transition-colors duration-500">
        <h3 class="text-xl md:text-2xl text-gray-700 dark:text-blue-400 mb-4">Links de Contato</h3>
        <div class="flex flex-col space-y-3 text-blue-600 dark:text-blue-400 text-sm md:text-base">
          <a href="https://github.com/OMateusSO?tab=repositories" target="_blank" class="flex items-center space-x-2 hover:text-blue-800 dark:hover:text-red-400 transition-colors duration-200">
            <img src="/assets/img/github.png" class="w-6 h-6 md:w-8 md:h-8" alt="GitHub">
            <span>GitHub</span>
          </a>
          <a href="mailto:mateuswy123@gmail.com" target="_blank" class="flex items-center space-x-2 hover:text-blue-800 dark:hover:text-red-400 transition-colors duration-200">
            <img src="/assets/img/gmail.png" class="w-6 h-6 md:w-8 md:h-8" alt="Gmail">
            <span>Gmail</span>
          </a>
          <a href="https://www.linkedin.com/in/mateus-sousa-basilio-a0097b217/" target="_blank" class="flex items-center space-x-2 hover:text-blue-800 dark:hover:text-red-400 transition-colors duration-200">
            <img src="/assets/img/linkedin.png" class="w-7 h-7 md:w-9 md:h-9" alt="LinkedIn">
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <!-- Tecnologias -->
      <div :class="{'bg-white': !lightDark, 'dark:bg-gray-700': lightDark}" class="card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transition-colors duration-500">
        <h3 class="text-xl md:text-2xl text-gray-700 dark:text-blue-400 mb-4">Tecnologias</h3>
        <ul class="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
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
  color: #ffffff;
}

.dark-theme h3 {
  color: #3b82f6;
}

h1, h2, h3 {
  transition: color 0.3s ease;
}
</style>

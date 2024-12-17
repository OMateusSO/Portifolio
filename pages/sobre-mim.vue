<template>
  <Nav />
  <div :class="{ 'dark-theme': lightDark }"
    class="flex flex-col items-center min-h-screen py-12 px-4 bg-gray-100 transition-colors duration-300">
    <div class="text-center mb-10">
      <h1 class="text-4xl lg:text-5xl font-bold dark:text-white transition-all duration-500">Sobre Mim</h1>
    </div>

    <!-- Card Principal -->
    <div :class="{ 'bg-white hover:shadow-xl': !lightDark, 'dark:bg-gray-700': lightDark }"
      class="rounded-lg shadow-lg p-6 max-w-xl md:max-w-4xl mx-auto text-center md:text-left md:flex md:items-center md:space-x-6 transition-colors duration-500">
      <!-- Foto de Perfil -->
      <div class="justify-center flex-shrink-0 flex md:justify-center mb-6 md:mb-0">
        <img src="/assets/img/Design sem nome (1).png"
          :class="{ 'border-gray-200': !lightDark, 'border-gray-800': lightDark }"
          class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 object-cover shadow-md" alt="Foto de perfil">
      </div>

      <!-- Informações -->
      <div class="space-y-4 text-center md:text-left">
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white transition-all duration-500">Mateus
          Sousa Basilio</h2>
        <h4 class="text-md md:text-lg text-blue-600 dark:text-blue-400">Desenvolvedor Web</h4>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          Tenho {{ idade }} anos, sou formado em Análise e Desenvolvimento de Sistemas e estou em busca de oportunidades
          para superar desafios, aplicar minhas habilidades e contribuir ativamente enquanto aprendo. Procuro um
          ambiente que valorize a inovação e o crescimento, onde eu possa evoluir e agregar valor ao time.
        </p>
      </div>
    </div>

    <!-- Links e Tecnologias -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full max-w-xl md:max-w-4xl">
      <!-- Links de Contato -->
      <div :class="{ 'bg-white': !lightDark, 'dark:bg-gray-700': lightDark }"
        class="card p-6 rounded-lg shadow-lg hover:shadow-xl">
        <h3 class="text-center text-xl md:text-2xl text-gray-700 dark:text-blue-400 mb-4">Links de Contato</h3>
        <div class="flex justify-center gap-4">
          <a href="https://github.com/OMateusSO?tab=repositories" target="_blank">
            <img src="/assets/img/github.png" alt="GitHub" class="w-12 h-12 md:w-14 md:h-14">
          </a>
          <a href="mailto:mateuswy123@gmail.com" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail"
              class="w-12 h-12 md:w-14 md:h-14">
          </a>
          <a href="https://www.linkedin.com/in/mateus-sousa-basilio-a0097b217/" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn"
              class="w-12 h-12 md:w-14 md:h-14">
          </a>
        </div>
      </div>

      <!-- Tecnologias -->
      <div :class="{ 'bg-white': !lightDark, 'dark:bg-gray-700': lightDark }"
        class="card p-6 rounded-lg shadow-lg hover:shadow-xl">
        <h3 class="text-center text-xl md:text-2xl text-gray-700 dark:text-blue-400 mb-4">Tecnologias</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js"
            class="w-12 h-12 md:w-14 md:h-14">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript" class="w-12 h-12 md:w-14 md:h-14">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java"
            class="w-12 h-12 md:w-14 md:h-14">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"
            class="w-12 h-12 md:w-14 md:h-14">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"
            class="w-12 h-12 md:w-14 md:h-14">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"
            class="w-12 h-12 md:w-14 md:h-14">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL" class="w-12 h-12 md:w-14 md:h-14">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB"
            class="w-12 h-12 md:w-14 md:h-14">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"
            class="w-12 h-12 md:w-14 md:h-14">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase"
            class="w-12 h-12 md:w-14 md:h-14">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS"
            class="w-12 h-12 md:w-14 md:h-14">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React"
            class="w-12 h-12 md:w-14 md:h-14">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js"
            class="w-12 h-12 md:w-14 md:h-14">
        </div>
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

.dark-theme h2 {
  color: #ffffff;
}

.dark-theme h3 {
  color: #e6edfa;
}

h1,
h2,
h3 {
  transition: color 0.3s ease;
}
</style>

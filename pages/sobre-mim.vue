<template>
  <Nav />
  <div :class="{ 'dark-theme': lightDark }" class="flex flex-col items-center min-h-screen py-12 px-6 bg-gray-100 transition-colors duration-300">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold dark:text-white transition-all duration-500">Sobre Mim</h1>
    </div>

    <div :class="{ 'bg-white hover:shadow-2xl': !lightDark, 'dark:bg-gray-800': lightDark }"
      class="rounded-xl shadow-lg p-8 max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 transition-colors duration-500">
      
      <div class="flex-shrink-0 flex justify-center md:justify-start">
        <img src="/assets/img/Design sem nome (1).png" 
          :class="{ 'border-gray-300': !lightDark, 'border-gray-600': lightDark }"
          class="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 object-cover shadow-md" alt="Foto de perfil">
      </div>

      <div class="space-y-4 text-center md:text-left">
        <h2 class="text-3xl font-semibold text-gray-800 dark:text-white transition-all duration-500">Mateus Sousa Basilio</h2>
        <h4 class="text-lg text-blue-600 dark:text-blue-400 font-medium">Desenvolvedor Web</h4>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
          Tenho {{ idade }} anos, sou formado em Análise e Desenvolvimento de Sistemas e estou em busca de oportunidades
          para superar desafios, aplicar minhas habilidades e contribuir ativamente enquanto aprendo. Busco um ambiente
          que valorize inovação e crescimento, onde eu possa evoluir e agregar valor ao time.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 w-full max-w-4xl">
      <div :class="{ 'bg-white': !lightDark, 'dark:bg-gray-800': lightDark }" class="rounded-xl shadow-lg p-6 hover:shadow-2xl">
        <h3 class="text-center text-2xl font-medium dark:text-blue-400 mb-4">Links de Contato</h3>
        <div class="flex justify-center gap-6">
          <a href="https://github.com/OMateusSO?tab=repositories" target="_blank" class="hover:scale-110 transition-transform">
            <img src="/assets/img/github.png" alt="GitHub" class="w-14 h-14">
          </a>
          <a href="mailto:mateuswy123@gmail.com" target="_blank" class="hover:scale-110 transition-transform">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" class="w-14 h-14">
          </a>
          <a href="https://www.linkedin.com/in/mateus-sousa-basilio-a0097b217/" class="hover:scale-110 transition-transform">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" class="w-14 h-14">
          </a>
        </div>
      </div>

      <div :class="{ 'bg-white': !lightDark, 'dark:bg-gray-800': lightDark }" class="rounded-xl shadow-lg p-6 hover:shadow-2xl">
        <h3 class="text-center text-2xl font-medium dark:text-blue-400 mb-4">Tecnologias</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <img v-for="tech in tecnologias" :key="tech.name" :src="tech.icon" :alt="tech.name" class="w-14 h-14">
        </div>
      </div>
    </div>
  </div>
  <Foot />
</template>

<script setup lang="ts">
import { lightDark } from '@/sharedTheme';

function calcularIdade(dataNascimento: string): number {
  const nascimento = new Date(`${dataNascimento}T00:00:00`);
  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  if (hoje.getMonth() < nascimento.getMonth() || (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

const idade = calcularIdade("2002-12-18");

const tecnologias = [
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Next.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
];
</script>

<style>
.dark-theme h1, .dark-theme h2, .dark-theme h3 {
  color: #ffffff;
}

h1, h2, h3 {
  transition: color 0.3s ease;
}

body {
  font-family: 'Inter', sans-serif; /* Ou outra fonte de sua escolha */
}
</style>
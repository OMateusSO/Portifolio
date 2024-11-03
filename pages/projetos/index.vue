<template>
  <Nav />
  <div :class="{ 'dark-theme': lightDark }" class="relative min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
    <div class="content w-full max-w-6xl mx-auto p-4 lg:p-8">
      <!-- Título da seção de Projetos -->
      <div class="py-4 text-center">
        <h1 class="text-3xl lg:text-5xl font-bold">Meus Projetos</h1>
      </div>

      <!-- Barra de pesquisa -->
      <div class="flex justify-center mb-6">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Buscar projetos..."
          class="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md text-gray-700 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-gray-200"
        />
      </div>

      <!-- Seção de cards de projetos filtrados com carrossel -->
      <div class="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          @click="goToProject(project.route)"
        >
          <h2 class="text-2xl text-black font-semibold mb-2">{{ project.title }}</h2>
          <p class="text-gray-600 dark:text-gray-400">{{ project.description }}</p>
        </div>
      </div>

      <!-- Seção de vídeo -->
      <div class="py-8">
        <h1 class="text-3xl lg:text-5xl font-bold text-center">Vídeo de Trabalhos e Projetos</h1>
      </div>
      <div class="flex justify-center">
        <div class="max-w-screen-md w-full">
          <video src="/assets/videos/Protifole.mp4" class="w-full rounded-lg shadow-md" controls autoplay muted></video>
        </div>
      </div>
    </div>
  </div>
  <Foot/>
</template>

<script setup lang="ts">
import { lightDark } from '@/sharedTheme';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const router = useRouter();

// Estado reativo para o termo de pesquisa
const searchQuery = ref("");

// Lista de projetos
const projects = [
  { id: 1, title: "Sistema de Login", description: "Projeto de sistema de login seguro e responsivo.", route: "/projetos/Sistema_de_Login" },
  { id: 2, title: "Chat", description: "Aplicação de chat em tempo real com várias funcionalidades.", route: "/projetos/chat" },
  { id: 3, title: "E-commerce", description: "Projeto completo de e-commerce com carrinho de compras.", route: "/projetos/ecommerce" },
  // Adicione outros projetos conforme necessário
];

// Computed para filtrar projetos
const filteredProjects = computed(() => {
  return projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Função para redirecionar para o projeto
function goToProject(route: string) {
  router.push(route);
}

// Funções para scroll do carrossel
function scrollLeft() {
  const container = document.querySelector('.cards-container');
  container?.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
  const container = document.querySelector('.cards-container');
  container?.scrollBy({ left: 300, behavior: 'smooth' });
}
</script>

<style>
.dark-theme {
  /* Estilo para o tema escuro */
}

.content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

.card {
  min-width: 300px; /* Ajuste o tamanho do card conforme necessário */
  transition: transform 0.2s;
}

</style>

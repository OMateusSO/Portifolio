<template>
  <section class="w-full min-h-screen flex flex-col items-center justify-start px-6 py-16
    bg-white text-gray-900
    dark:bg-black dark:text-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h1 class="pt-2 pb-3 text-4xl lg:text-5xl font-extrabold tracking-tight
               bg-gradient-to-r from-cyan-300 to-blue-400
               bg-clip-text text-transparent
               drop-shadow-[0_0_14px_rgba(34,211,238,0.6)]
               animate-glow">
          Projetos em destaque
        </h1>
        <p class="mt-4 text-lg opacity-70 max-w-2xl mx-auto">
          Alguns dos projetos que desenvolvi focados em frontend, backend e aplicações completas.
        </p>
      </div>
    </div>
    <div class="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
      <div v-for="project in filteredProjects" :key="project.id" @click="goToProject(project.route)" class="cursor-pointer rounded-2xl overflow-hidden border
        shadow-md transition-all duration-300 hover:scale-105
        bg-white text-gray-800 border-gray-200 hover:shadow-lg
        dark:bg-gradient-to-br dark:from-[#050b1a] dark:via-[#0a1733] dark:to-[#0f2357]
        dark:text-blue-100 dark:border-blue-900/40
        dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]">
        <div class="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <img v-if="project.image" :src="project.image" alt="" class="w-full h-full object-cover">
          <span v-else class="text-gray-400 dark:text-gray-500">Imagem do projeto</span>
        </div>
        <div class="p-6 flex flex-col">
          <h2 class="text-2xl font-semibold mb-2">{{ project.title }}</h2>
          <p class="text-gray-600 dark:text-gray-400">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="relative w-full py-28 px-6 flex flex-col items-center
      transition-all duration-300 overflow-visible z-10
      bg-gray-100 text-gray-800
      dark:bg-gradient-to-br dark:from-[#050b1a] dark:via-[#0a1733] dark:to-[#0f2357]
      dark:text-blue-100
      dark:border-t dark:border-b dark:border-blue-900/40
      dark:shadow-[0_-10px_30px_rgba(37,99,235,0.25),0_10px_30px_rgba(37,99,235,0.25)]">
    <h1 class="text-3xl lg:text-5xl font-bold text-center dark:text-white">
      Vídeo de Trabalhos e Projetos
    </h1>

    <p class="mt-4 mb-12 text-center text-lg opacity-70 max-w-2xl mx-auto">
      Uma demonstração prática dos projetos em funcionamento, destacando recursos,
      interface e fluxo de uso.
    </p>
    <div class="w-full max-w-5xl">
      <video src="/videos/Protifole.mp4" class="w-full rounded-xl shadow-lg aspect-video" controls muted>
      </video>
    </div>
  </section>

  <section class="w-full min-h-screen flex flex-col items-center px-6 py-24
    bg-white text-gray-900
    dark:bg-black dark:text-blue-100">
    <h2 class="pt-2 pb-3 text-4xl lg:text-5xl font-extrabold tracking-tight
     bg-gradient-to-r from-cyan-300 to-blue-400
     bg-clip-text text-transparent
     drop-shadow-[0_0_14px_rgba(34,211,238,0.6)]
     animate-glow">
      Meu GitHub
    </h2>

    <p class="mt-4 mb-14 text-center text-lg opacity-70 max-w-2xl mx-auto">
      Repositórios públicos com foco em frontend, backend, estudos e aplicações completas.
    </p>

    <div class="w-full max-w-lg mb-12">
      <input class="w-full px-6 py-3 rounded-xl outline-none border
        transition-all duration-300 shadow-md
        bg-white text-gray-700 placeholder-gray-400 border-gray-300
        focus:border-blue-500 focus:shadow-md
        dark:bg-gradient-to-br dark:from-[#020b1e] dark:via-[#061a3a] dark:to-[#0a1e44]
        dark:text-blue-100 dark:placeholder-blue-300/50 dark:border-blue-900/40
        dark:focus:border-cyan-400
        dark:focus:shadow-[0_0_25px_rgba(34,211,238,0.45)]" placeholder="Pesquisar Projeto">
    </div>

    <div class="w-full max-w-6xl">
      <div class="flex items-center justify-between mb-10">
        <span class="font-mono text-sm opacity-60">
          github.com/OMateusSO
        </span>

        <a href="https://github.com/OMateusSO?tab=repositories" target="_blank"
          class="text-blue-400 hover:text-blue-300 transition hover:underline">
          Ver no GitHub ↗
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="repo in filteredRepos" :key="repo.id" class="rounded-2xl border cursor-pointer
         transition-all duration-300 hover:scale-105
         bg-white border-gray-200 hover:shadow-lg
         dark:bg-gradient-to-br dark:from-[#050b1a] dark:via-[#0a1733] dark:to-[#0f2357]
         dark:border-blue-900/40
         dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]">

          <div class="p-6 flex flex-col h-full">
            <h3 class="text-2xl font-semibold mb-2">
              {{ repo.name }}
            </h3>

            <p class="text-sm opacity-80 flex-grow">
              {{ repo.description || 'Sem descrição' }}
            </p>

            <div class="flex flex-wrap gap-4 mt-4 text-sm opacity-70">
              <span v-if="repo.language">💻 {{ repo.language }}</span>
              <span>⭐ {{ repo.stargazers_count }}</span>
              <span>🍴 {{ repo.forks_count }}</span>
            </div>

            <a :href="repo.html_url" target="_blank"
              class="mt-5 text-blue-400 hover:text-blue-300 hover:underline text-sm">
              Abrir repositório →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';



const repos = ref<any[]>([])

onMounted(async () => {
  try {
    const res = await fetch(
      'https://api.github.com/users/OMateusSO/repos?sort=updated'
    )
    repos.value = await res.json()
  } catch (err) {
    console.error('Erro ao carregar repositórios', err)
  }
})

const filteredRepos = computed(() => {
  if (!searchQuery.value) return repos.value

  return repos.value.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    (repo.description &&
      repo.description.toLowerCase().includes(searchQuery.value.toLowerCase()))
  )
})

const router = useRouter();
const searchQuery = ref("");

const projects = [
  {
    id: 1,
    title: "Sistema de Login",
    description: "Projeto de sistema de login seguro e responsivo.",
    route: "/projetos/sistemaLogin",
    image: "/projetos/sistemaLogin.png"
  },
  {
    id: 2,
    title: "WebChat",
    description: "Aplicação de chat em tempo real com várias funcionalidades.",
    route: "/projetos/webchat",
    image: "/projetos/webchat.png"
  },
  {
    id: 3,
    title: "Biblioteca",
    description: "Projeto completo de e-commerce com carrinho de compras.",
    route: "/projetos/biblioteca",
    image: "/projetos/biblioteca.png"
  }
]

const filteredProjects = computed(() => {
  return projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function goToProject(route: string) {
  router.push(route);
}
</script>

<style>
.cards-container .card {
  min-width: 300px;
  transition: transform 0.2s;
}

.cards-container .card:hover {
  transform: translateY(-5px);
}
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const abrirPDF = () => {
  const urlPDF = '/docs/MateusSousaBasilio.pdf';
  window.open(urlPDF, '_blank');
};

const scrollParaSobre = () => {
  const section = document.getElementById('sobre')
  section?.scrollIntoView({ behavior: 'smooth' })
}


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

const habilidades = {
  frontend: [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Next.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
    { name: 'Nuxt.js', icon: 'https://logo.svgcdn.com/logos/nuxt.svg' },
    { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  ],
  backend: [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'C#', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'},
    { name: 'Python', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
  ],
  banco: [
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
  ],
  ferramentas: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Insomnia', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Notion', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
    { name: 'Trello', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg' },
  ],
  interpessoais: [
    'communication',
    'teamwork',
    'organization',
    'proactivity',
    'fastLearning',
    'problemSolving'
  ]
}

type TimelineItem = {
  ano: string
  tituloKey: string
  descricaoKey: string
  skills?: string[]
}

const timeline: TimelineItem[] = [
  {
    ano: '2020',
    tituloKey: 'timeline.start.title',
    descricaoKey: 'timeline.start.description',
    skills: ['Portugol', 'Python', 'C#'],
  },
  {
    ano: '2021–2024',
    tituloKey: 'timeline.degree.title',
    descricaoKey: 'timeline.degree.description',
    skills: ['Java', 'Apache', 'MySQL', 'Git', 'GitHub', 'Trello'],
  },
  {
    ano: '2024',
    tituloKey: 'timeline.internship.title',
    descricaoKey: 'timeline.internship.description',
    skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Node.js', 'Docker'],
  },
  {
    ano: '2025',
    tituloKey: 'timeline.projects.title',
    descricaoKey: 'timeline.projects.description',
    skills: ['Next.js', 'React', 'Nuxt', 'Firebase', 'MongoDB', 'SQLite'],
  },
]
</script>

<template>
  <section
    class="w-full min-h-screen flex flex-col items-center justify-center px-6 bg-white text-gray-900 dark:bg-black dark:text-white">
    <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center">
      <div class="flex justify-center">
        <img src="/assets/img/Design sem nome (1).png"
          class="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 object-cover shadow-xl border-gray-300 dark:border-gray-600"
          alt="Foto de perfil" />
      </div>
      <div class="text-center md:text-left space-y-5">
        <h1 class="text-4xl md:text-6xl font-bold">Mateus Sousa Basilio</h1>
        <h2 class="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
          {{ $t('hero.role') }}
        </h2>

        <p class="text-lg leading-relaxed max-w-xl text-gray-700 dark:text-gray-400">
          {{ $t('hero.description') }}
        </p>

        <div class="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          <button @click="abrirPDF" class="px-6 py-3 rounded-xl transition border
            bg-black text-white hover:bg-gray-800
            dark:bg-gradient-to-br dark:from-[#050b1a] dark:via-[#0a1733] dark:to-[#0f2357]
            dark:text-blue-100
            dark:border-blue-900/40
            dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]
            dark:shadow-[0_-10px_30px_rgba(37,99,235,0.25),0_10px_30px_rgba(37,99,235,0.25)]">
            {{ $t('hero.buttons.resume') }}
          </button>

          <NuxtLink to="/projetos" class="px-6 py-3 rounded-xl border transition
            border-black/30 text-black hover:bg-black/5
            dark:border-white/30 dark:text-white dark:hover:bg-white/10">
            {{ $t('hero.buttons.projects') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <button @click="scrollParaSobre" class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce
         cursor-pointer hover:scale-110 transition-transform" aria-label="Ir para a seção Sobre mim">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </section>

  <section id="sobre" class="relative w-full py-28 px-6 flex flex-col items-center
    transition-all duration-300 overflow-visible z-10
    bg-gray-100 text-gray-800
    dark:bg-gradient-to-br dark:from-[#050b1a] dark:via-[#0a1733] dark:to-[#0f2357]
    dark:text-blue-100
    dark:border-t dark:border-b dark:border-blue-900/40
    dark:shadow-[0_-10px_30px_rgba(37,99,235,0.25),0_10px_30px_rgba(37,99,235,0.25)]">
    <div class="max-w-4xl mx-auto space-y-8 text-justify">
      <h2 class="text-5xl font-bold text-center mb-8">
        {{ $t('about.title') }}
      </h2>

      <p class="text-lg md:text-xl leading-relaxed">
        {{ $t('about.introStart', { idade }) }}
        <span class="font-semibold">
          {{ $t('about.degree') }}
        </span>.
        {{ $t('about.introEnd') }}
      </p>

      <p class="text-lg md:text-xl leading-relaxed">
        {{ $t('about.paragraph2') }}
      </p>

      <p class="text-lg md:text-xl leading-relaxed mb-12">
        {{ $t('about.paragraph3') }}
      </p>

      <div class="flex flex-col md:flex-row justify-center gap-8">
        <div class="p-10 rounded-2xl shadow-xl border transition-all duration-300 hover:shadow-2xl text-center max-w-sm
         bg-white border-gray-300 text-gray-900
         dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-100
         dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]">
          <h3 class="text-5xl md:text-6xl font-bold mb-3 py-4
                 bg-gradient-to-r from-cyan-300 to-blue-400
                 bg-clip-text text-transparent">
            {{ $t('about.cards.degreeTitle') }}
          </h3>
          <p class="text-lg md:text-xl leading-relaxed">
            {{ $t('about.cards.degreeText') }}
          </p>
        </div>
        <div class="p-10 rounded-2xl shadow-xl border transition-all duration-300 hover:shadow-2xl text-center max-w-sm
         bg-white border-gray-300 text-gray-900
         dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-100
         dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]">


          <h3 class="text-5xl md:text-6xl font-bold mb-3
                 bg-gradient-to-r from-cyan-300 to-blue-400
                 bg-clip-text text-transparent">
            {{ $t('about.cards.experienceTitle') }}
          </h3>
          <p class="text-lg md:text-xl leading-relaxed">
            {{ $t('about.cards.experienceText') }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="w-full py-24 px-6 bg-gray-50 text-gray-900 dark:bg-black dark:text-white">
    <div class="max-w-6xl mx-auto space-y-24">
      <div class="space-y-14">
        <h2 class="text-4xl font-bold text-center">
          {{ $t('skills.title') }}
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(lista, key) in habilidades" :key="key" :class="key === 'interpessoais' ? 'lg:col-span-4' : ''"
            class="rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300
            bg-white
            dark:bg-gradient-to-br dark:from-[#050b1a] dark:via-[#0a1733] dark:to-[#0f2357]">
            <h3 class="text-2xl font-semibold mb-6 text-center">
              {{ $t(`skills.${key}`) }}
            </h3>
            <div v-if="key !== 'interpessoais'" class="flex flex-wrap justify-center gap-5">
              <div v-for="item in lista as any[]" :key="item.name"
                class="flex flex-col items-center gap-1 hover:scale-110 transition">
                <img :src="item.icon" :alt="item.name" class="w-12 h-12" />
                <span class="text-sm opacity-80">{{ item.name }}</span>
              </div>
            </div>

            <div v-else class="flex flex-wrap justify-center gap-4">
              <span v-for="(skill, index) in lista" :key="`interpessoal-${index}`" class="px-4 py-2 rounded-full text-sm border
                border-gray-300 bg-gray-100 text-gray-700
                dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-200">
                {{ $t(`skills.soft.${skill}`) }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-14">
        <h2 class="text-4xl font-bold text-center">
          {{ $t('timeline.title') }}
        </h2>
        <div class="relative max-w-4xl mx-auto">
          <div class="absolute left-6 top-0 h-full w-[3px] rounded-full
            bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500
            dark:bg-gradient-to-b dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-600
            dark:shadow-[0_0_20px_rgba(56,189,248,0.6)]">
          </div>

          <div class="space-y-12">
            <div class="space-y-12">
              <div v-for="item in timeline" :key="item.ano" class="group relative pl-14">
                <span class="absolute left-4 top-1/2 -translate-y-1/2
                  w-5 h-5 rounded-full flex items-center justify-center
                  transition-all duration-300
                  bg-gray-600 ring-4 ring-gray-300 group-hover:ring-blue-400/40
                  dark:bg-blue-500 dark:ring-blue-500/30 dark:group-hover:ring-blue-400/60">
                  <span class="w-2 h-2 rounded-full bg-white"></span>
                </span>
                <div class="p-6 rounded-xl border-l-4 transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                  bg-white border-gray-400 shadow-md group-hover:border-blue-600
                  dark:bg-blue-950/40 dark:border-blue-800
                  dark:group-hover:border-blue-400
                  dark:hover:shadow-[0_10px_30px_rgba(37,99,235,0.35)]">
                  <span class="inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide
                    bg-gray-200 text-gray-700
                    dark:bg-blue-900/50 dark:text-cyan-300">
                    {{ item.ano }}
                  </span>
                  <h3 class="text-xl font-bold mt-1">
                    {{ $t(item.tituloKey) }}
                  </h3>
                  <p class="mt-3 text-base leading-relaxed text-gray-700 dark:text-blue-200/80">
                    {{ $t(item.descricaoKey) }}
                  </p>
                  <div v-if="item.skills?.length" class="mt-4 flex flex-wrap gap-2">
                    <span v-for="(skill, index) in item.skills" :key="index" class="px-3 py-1 rounded-full text-sm border
                      border-gray-300 bg-gray-100 text-gray-700
                      dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-200">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}
</style>

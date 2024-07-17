<template>
  <video v-if="lightDark" src="/assets/videos/0701(1).mp4" class="video-bg" autoplay loop plays-inline muted></video>
  <Nav></Nav>
  <div :class="{ 'dark-theme': lightDark }" class="flex flex-col justify-center items-center min-h-screen p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-lg text-black">
      <!-- Primeira coluna -->
      <div>
        <!-- Informações pessoais -->
        <div class="card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4">
          <h1 class="text-3xl">Mateus Sousa Basilio</h1>
          <h2 class="text-xl">PROGRAMADOR FRONTEND</h2>
          <p>Estudante de Tecnologia em Análise e Desenvolvimento de Sistemas, com o objetivo de ganhar experiência para
            embarcar no mercado de trabalho.</p>
        </div>
        
        <!-- Experiências e Projetos -->
        <div class="card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4">
          <div>
            <h3 class="text-blue-800 dark:text-blue-400 glow-text">EXPERIÊNCIAS</h3>
            <div>
              <p>Suporte.ES (<a target="_blank" href="https://suporte.es/"
                  class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-800">Link</a>) -
                Espírito Santo</p>
              <p>Desenvolvedor Frontend</p>
              <p>Fevereiro 2024</p>
            </div>
          </div>

          <br>
         
          <p>Projeto: Sistema de cadastro/login (<a target="_blank" href=""
              class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-800">Link</a>)</p>
          <ul class="list-disc list-inside">
            <li>O site tem uma interface simplista para que o usuário se cadastre e faça login de forma intuitiva.</li>
            <li>Tecnologias: HTML5, CSS3</li>
          </ul>

          <br>

          <p>Projeto: Blog (<a target="_blank" href=""
              class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-red-400">Link</a>)</p>
          <ul class="list-disc list-inside">
            <li>Esse site é um Blog de informações, para os usuários adicionarem, editarem e apagarem posts</li>
            <li>Tecnologias: Vue, Prisma, HTML5, CSS3, JS, Node</li>
          </ul>
        </div>
      </div>
      <!-- Segunda coluna -->
      <div>
        <!-- Links de contato -->
        <div class="card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4">
          <h3 class="text-blue-800 dark:text-blue-400 glow-text">LINKS DE CONTATO</h3>
          <div class="flex items-center mb-4">
            <div class="mr-2">
              <a target="_blank" href="https://github.com/OMateusSO?tab=repositories">
                <img src="/assets/img/github.png" class="w-8 h-9" alt="GitHub">
              </a>
            </div>
            <div>
              <a target="_blank" href="https://github.com/OMateusSO?tab=repositories"
                class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-red-400">GitHub</a>
            </div>
          </div>
          <div class="flex items-center mb-4">
            <div class="mr-2">
              <a target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mateuswy123@gmail.com&su=">
                <img src="/assets/img/gmail.png" class="w-8 h-7" alt="Gmail">
              </a>
            </div>
            <div>
              <a target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mateuswy123@gmail.com&su="
                class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-red-400">Gmail</a>
            </div>
          </div>
          <div class="flex items-center">
            <div class="mr-2">
              <a target="_blank" href="https://www.linkedin.com/in/mateus-sousa-basilio-a0097b217/">
                <img src="/assets/img/linkedin.png" class="w-9 h-9" alt="LinkedIn">
              </a>
            </div>
            <div>
              <a target="_blank" href="https://www.linkedin.com/in/mateus-sousa-basilio-a0097b217/"
                class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-red-400">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <!-- Tecnologias -->
        <div class="card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4">
          <h3 class="text-blue-800 dark:text-blue-400 glow-text">TECNOLOGIAS</h3>
          <p>Vue</p>
          <p>JS</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>MySQL</p>
          <p>PostgreSQL</p>
          <p>Git/GitHub/GitLab</p>
        </div>
        
        <!-- Educação -->
        <div class="card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4">
          <h3 class="text-blue-800 dark:text-blue-400 glow-text">EDUCAÇÃO</h3>
          <p>Instituto Federal do Espírito Santo (IFES) - Campus Santa Teresa</p>
          <ul class="list-disc list-inside">
            <li>Tecnólogo em Análise e Desenvolvimento de Sistemas (Cursando)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Foot></Foot>
</template>

<script setup lang="ts">
import { lightDark } from '@/sharedTheme';
</script>

<style>


.video-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.7;
  filter: brightness(1.2) contrast(1.2);
}

.content {
  position: relative;
  z-index: 1;
  min-height: 100vh; /* Para garantir que o conteúdo preencha pelo menos a tela inteira */
}

.dark-theme h3 {
  color: rgba(25, 0, 255, 0.849);
}

.dark-theme a {
  color: rgba(25, 0, 255, 0.849);
}

.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.backg {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.glow-text {
  @apply font-bold; /* Tamanho, negrito e cor do texto */
  animation: glow 0.5s ease-in-out infinite alternate; /* Animação de brilho */
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #c5bef179, 0 0 20px #a4abe56b, 0 0 30px #b9abf7, 0 0 40px #d2c9f3, 0 0 50px #b3bcee, 0 0 60px #b2c3e4, 0 0 70px #c7cef0; /* Sombra do texto */ /* Sombra inicial */
  }
  to {
    text-shadow: 0 0 10px #5e5e639c, 0 0 20px #bdbdbd, 0 0 30px #ffffff, 0 0 40px #a1a1a3, 0 0 50px #bdbdbd, 0 0 60px #cbcccf, 0 0 70px #afb0b6; /* Sombra do texto */
  }
}
</style>

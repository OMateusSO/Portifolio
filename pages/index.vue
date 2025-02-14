<script setup lang="ts">
import { lightDark } from '../sharedTheme';
import Foot from '../components/Foot.vue';

const abrirPDF = () => {
  const urlPDF = '/docs/MateusSousaBasilio.pdf';
  window.open(urlPDF, '_blank');
};
</script>

<template>
  <Nav />
  <div :class="{ 'dark-theme': lightDark }"
    class="relative min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900">
    <div class="content w-full max-w-4xl px-8 md:px-16 lg:px-32 text-center">
      <div class="flex items-center justify-center py-8">
        <h1 class="text-5xl lg:text-6xl font-bold  dark:text-white">Bem-vindo(a) ao meu Portfólio!</h1>
      </div>
      <div class="py-2 text-justify">
        <p class="text-2xl lg:text-4xl dark:text-gray-300">
          Neste portfólio, você encontrará exemplos dos meus projetos e habilidades nas áreas de desenvolvimento web,
          tanto em Front-end quanto em Back-end.
          Descubra mais sobre minha experiência em cada um dos meus trabalhos na seção de <router-link to="/projetos"
            class="text-blue-600 dark:text-blue-400 underline">Projetos</router-link>.
        </p>
        <p class="text-2xl lg:text-4xl dark:text-gray-300 mt-6">
          Para saber mais sobre minha trajetória e qualificações, você pode acessar meu currículo completo no botão
          abaixo.
          E, se quiser trocar ideias ou colaborar, minhas redes sociais estão disponíveis na seção <router-link
            to="/sobre-mim" class="text-blue-600 dark:text-blue-400 underline">Sobre</router-link>.
          Fique à vontade para entrar em contato!
        </p>
      </div>
      <div class="flex items-center justify-center m-8">
        <button :class="{ 'border-t-2 text-gray-600 border-gray-600 border-2': lightDark, 'bg-white border-2  border-gray-300': !lightDark }"
          class="rounded-full px-6 py-2 text-lg"
          @click="abrirPDF">
          Currículo
        </button>




      </div>
    </div>
  </div>
  <Foot />
</template>

<style>
.dark-theme {
  /* Adicione seu estilo específico para o tema escuro aqui */
}

.content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}
</style>

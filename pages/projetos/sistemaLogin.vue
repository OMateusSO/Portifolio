<template>
  <section
    class="w-full min-h-screen flex flex-col items-center justify-start px-6 py-16
           bg-white text-gray-900
           dark:bg-black dark:text-blue-100 transition-colors duration-300"
  >
    <div class="content w-full max-w-6xl mx-auto p-4 lg:p-8">

      <!-- Título da página -->
      <div class="py-4 text-center">
        <h1 class="text-3xl lg:text-5xl font-bold dark:text-white">
          {{ $t("loginSystem.title") }}
        </h1>
      </div>

      <!-- Sobre o Projeto -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t("loginSystem.about.title") }}
        </h2>

        <p class="text-gray-700 dark:text-blue-100">
          {{ $t("loginSystem.about.text") }}
          <router-link
            to="/projetos/projetoZ"
            class="hover:text-blue-400 underline font-semibold ml-1"
          >
            Projeto-Z
          </router-link>
        </p>
      </div>

      <!-- Tecnologias Utilizadas -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t("loginSystem.technologies.title") }}
        </h2>

        <ul class="list-disc list-inside text-gray-700 dark:text-blue-100">
          <li>
            <strong>Vue.js:</strong>
            {{ $t("loginSystem.technologies.vue") }}
          </li>
          <li>
            <strong>Firebase:</strong>
            {{ $t("loginSystem.technologies.firebase") }}
          </li>
          <li>
            <strong>Tailwind CSS:</strong>
            {{ $t("loginSystem.technologies.tailwind") }}
          </li>
        </ul>
      </div>

      <!-- Funcionalidades -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t("loginSystem.features.title") }}
        </h2>

        <ul class="list-disc list-inside text-gray-700 dark:text-blue-100">
          <li>
            <strong>{{ $t("loginSystem.features.login") }}</strong>
          </li>
          <li>
            <strong>{{ $t("loginSystem.features.register") }}</strong>
          </li>
          <li>
            <strong>{{ $t("loginSystem.features.integration") }}</strong>
          </li>
        </ul>
      </div>

      <!-- Repositório -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t("loginSystem.repository.title") }}
        </h2>

        <a
          href="https://github.com/OMateusSO/Auth-Firebase"
          target="_blank"
          class="text-blue-600 hover:text-blue-800
                 dark:text-blue-300 dark:hover:text-blue-200 transition-colors"
        >
          https://github.com/OMateusSO/Auth-Firebase
        </a>
      </div>

      <!-- Demonstração -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t("loginSystem.demo.title") }}
        </h2>

        <div class="flex justify-center">
          <div class="max-w-screen-md w-full">
            <video
              src="/videos/Sistema_de_login.mp4"
              class="w-full rounded-xl shadow-lg"
              controls
              muted
            />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.content {
  position: relative;
  z-index: 1;
}

a {
  text-decoration: none;
}
</style>

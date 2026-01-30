<template>
  <section
    class="w-full min-h-screen flex flex-col items-center justify-start px-6 py-16
           bg-white text-gray-900
           dark:bg-black dark:text-blue-100 transition-colors duration-300"
  >
    <div class="content w-full max-w-6xl mx-auto p-4 lg:p-8">

      <!-- Título -->
      <div class="py-4 text-center">
        <h1 class="text-3xl lg:text-5xl font-bold dark:text-white">
          {{ $t('webchat.title') }}
        </h1>
      </div>

      <!-- Sobre -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t('webchat.about.title') }}
        </h2>
        <p class="text-gray-700 dark:text-blue-100">
          {{ $t('webchat.about.description') }}
        </p>
      </div>

      <!-- Tecnologias -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t('webchat.technologies.title') }}
        </h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-blue-100">
          <li>
            <strong>{{ $t('webchat.technologies.items.vue.name') }}:</strong>
            {{ $t('webchat.technologies.items.vue.description') }}
          </li>
          <li>
            <strong>{{ $t('webchat.technologies.items.firebase.name') }}:</strong>
            {{ $t('webchat.technologies.items.firebase.description') }}
          </li>
          <li>
            <strong>{{ $t('webchat.technologies.items.tailwind.name') }}:</strong>
            {{ $t('webchat.technologies.items.tailwind.description') }}
          </li>
        </ul>
      </div>

      <!-- Funcionalidades -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t('webchat.features.title') }}
        </h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-blue-100">
          <li>
            <strong>{{ $t('webchat.features.items.auth.title') }}:</strong>
            {{ $t('webchat.features.items.auth.description') }}
          </li>
          <li>
            <strong>{{ $t('webchat.features.items.rooms.title') }}:</strong>
            {{ $t('webchat.features.items.rooms.description') }}
          </li>
          <li>
            <strong>{{ $t('webchat.features.items.realtime.title') }}:</strong>
            {{ $t('webchat.features.items.realtime.description') }}
          </li>
          <li>
            <strong>{{ $t('webchat.features.items.responsive.title') }}:</strong>
            {{ $t('webchat.features.items.responsive.description') }}
          </li>
        </ul>
      </div>

      <!-- GitHub -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t('webchat.repository.title') }}
        </h2>
        <a
          href="https://github.com/OMateusSO/WebChat"
          target="_blank"
          class="text-blue-600 hover:text-blue-800
                 dark:text-blue-300 dark:hover:text-blue-200 transition-colors"
        >
          {{ $t('webchat.repository.link') }}
        </a>
      </div>

      <!-- Demo -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t('webchat.demo.title') }}
        </h2>
        <div class="flex justify-center">
          <div class="max-w-screen-md w-full">
            <video
              src="/videos/ProjetoZ.mp4"
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


<style scoped>
.content {
  position: relative;
  z-index: 1;
}

a {
  text-decoration: none;
}
</style>

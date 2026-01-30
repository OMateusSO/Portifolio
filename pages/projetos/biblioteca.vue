<template>
  <section
    class="w-full min-h-screen flex flex-col items-center justify-start px-6 py-16
           bg-white text-gray-900
           dark:bg-black dark:text-blue-100
           transition-colors duration-300"
  >
    <div class="content w-full max-w-6xl mx-auto p-4 lg:p-8">

      <div class="py-4 text-center">
        <h1 class="text-3xl lg:text-5xl font-bold dark:text-white">
          {{ $t('library.title') }}
        </h1>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t('library.about.title') }}
        </h2>
        <p class="text-gray-700 dark:text-blue-100">
          {{ $t('library.about.description') }}
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t('library.technologies.title') }}
        </h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-blue-100">
          <li v-for="tech in $tm('library.technologies.items')" :key="tech.key">
            <strong>{{ tech.name }}:</strong> {{ tech.description }}
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t('library.features.title') }}
        </h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-blue-100">
          <li v-for="feature in $tm('library.features.items')" :key="feature.key">
            <strong>{{ feature.title }}:</strong> {{ feature.description }}
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t('library.repository.title') }}
        </h2>
        <a
          href="https://github.com/OMateusSO/Biblioteca"
          target="_blank"
          class="text-blue-600 hover:text-blue-800
                 dark:text-blue-300 dark:hover:text-blue-200
                 transition-colors"
        >
          {{ $t('library.repository.link') }}
        </a>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold dark:text-white mb-4">
          {{ $t('library.demo.title') }}
        </h2>
        <div class="flex justify-center">
          <div class="max-w-screen-md w-full">
            <video
              src="/videos/0514.mp4"
              class="w-full rounded-xl shadow-lg"
              controls
              muted
            ></video>
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
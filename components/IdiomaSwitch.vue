<script setup>
import { useI18n } from 'vue-i18n'

import flagBR from '@/assets/img/flags/brasil.png'
import flagUS from '@/assets/img/flags/usa.png'

const { locale } = useI18n()

function toggleLanguage() {
  locale.value = locale.value === 'pt' ? 'en' : 'pt'
  localStorage.setItem('language', locale.value)
}

const flags = {
  pt: flagBR,
  en: flagUS
}
</script>

<template>
  <button
    @click="toggleLanguage"
    class="p-2 rounded-lg transition-transform duration-200 hover:scale-110"
  >
    <img
      :src="flags[locale]"
      alt="Idioma"
      class="w-7 h-7 transition-opacity duration-200"
    />
  </button>
</template>

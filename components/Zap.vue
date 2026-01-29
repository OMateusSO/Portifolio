<!-- src/components/WhatsappFixed.vue -->
<template>
  <a 
    :href="`https://wa.me/${phone}`" 
    target="_blank"
    class="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
  >
    <img :src="icon" alt="WhatsApp" class="w-10 h-10">
  </a>
</template>

<script setup lang="ts">
interface Props {
  phone?: string       // Número no formato internacional: 5511999999999
  icon?: string        // Caminho do ícone do WhatsApp
}

// Props com valores padrão
const props = defineProps<Props>()
const phone = props.phone || "5527988963093"
const icon = props.icon || "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
</script>

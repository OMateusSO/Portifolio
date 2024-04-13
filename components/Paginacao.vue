<template>
  <div class="pagination flex justify-center">
    <span
      v-for="(item, index) in pageCount"
      :key="index"
      @click="goToPage(index)"
      :class="{ ' bg-sky-600': currentPage === index, 'bg-gray-300': currentPage !== index }"
      class="pagination-dot w-4 h-4 rounded-full inline-block cursor-pointer mx-1"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { currentPageIndex } from '../composible/sharedVariables'; 

const currentPage = ref(currentPageIndex.value); // Página atual
const pageSize = 1; // Quantidade de itens por página
const totalItems = 4; // Total de itens

const pageCount = Math.ceil(totalItems / pageSize); // Calcula o número total de páginas

const goToPage = (pageIndex: number) => {
  currentPage.value = pageIndex * pageSize; // Atualiza a página atual com base no índice clicado
  currentPageIndex.value = pageIndex; // Atualiza a variável compartilhada
};

const changePagination = () => {
  currentPage.value = (currentPage.value + pageSize) % totalItems; // Avança para a próxima página
  currentPageIndex.value = currentPage.value / pageSize;
};

onMounted(() => {
  setInterval(changePagination, 5000); // Altera a página a cada 5 segundos
});
</script>

<style scoped>
.pagination-dot {
  transition: background-color 0.2s ease;
}
</style>

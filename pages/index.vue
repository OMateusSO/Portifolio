
<script setup lang="ts">
import { lightDark } from '../sharedTheme';
import { useRouter } from 'vue-router';
import axios from 'axios';


const router = useRouter();

function bntSaibaMais() {
  // URL relativa do documento a ser baixado
  const documentoPath = '/MateusSousaBasilio.pdf';
  
  // Fazer uma solicitação HTTP GET para baixar o arquivo
  axios.get(documentoPath, {
    responseType: 'blob', // Especifica o tipo de resposta como blob
  })
  .then(response => {
    // Criar um objeto URL para o blob
    const url = URL.createObjectURL(response.data);
    // Criar um link temporário
    const link = document.createElement('a');
    link.href = url;
    link.download = 'MateusSousaBasilio.pdf'; // Nome do arquivo a ser baixado
    // Simular um clique no link para iniciar o download
    link.click();
  })
  .catch(error => {
    console.error('Erro ao baixar o arquivo:', error);
  });
}
</script>

<template>
  <Nav></Nav>
  <div :class="{ 'dark-theme': lightDark }" class="h-screen">
    <div>
      <div class="flex items-center justify-center p-16">
        <h1 class="text-7xl">AAAAAAAAAAAAAAA</h1>
      </div>
      <div class="flex items-center justify-center">
        <button class=" bg-blue-600 text-white rounded-lg hover:bg-blue-500 py-2 px-4" @click="bntSaibaMais">
          Baixar
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.dark-theme {
  background-color: #081330fa;
  color: white;
}
</style>

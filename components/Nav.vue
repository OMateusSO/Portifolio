<template>
  <div class="hidden h-full flex-col md:flex">
    <div
      class="container flex flex-col items-start justify-between space-y-2 py-8 sm:flex-row sm:items-center sm:space-y-0 md:h-16"
    >
      <router-link to="/">OMateusSO</router-link>
      <div class="ml-auto flex w-full space-x-2 sm:justify-end">
        <div>
          <button  @click="bntProjetos" class="border border-gray-300 rounded-lg hover:bg-gray-200 text-black py-2 px-4">
            Projetos
          </button>
        </div>
        <div>
          <button  @click="bntContatos" class="border border-gray-300 rounded-lg hover:bg-gray-200 text-black py-2 px-4">
            Contatos
          </button>
        </div>
        <div class="m-2.5">
          <DarkModeSwitch></DarkModeSwitch>
        </div>
      </div>
    </div>
    <div class="bg-border h-px w-full"></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function bntContatos() {
  router.push('/contatos');
}

function bntProjetos() {
  router.push('/projetos');
}


</script>

<style scoped>

</style>

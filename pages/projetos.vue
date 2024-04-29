<template>
  <Nav></Nav>
  <div :class="{ 'dark-theme': lightDark }" class="flex items-center justify-center h-screen" >
    <div class="flex justify-center">
      <div class="m-8">
        <div class="relative w-[1050px] h-[350px] m-8 border text-black  bg-white border-gray-300 rounded-lg">
          <div class="p-4">
            <h1>{{ contents[currentPageIndex].title }}</h1>
            <p>{{ contents[currentPageIndex].description }}</p>
          </div>
          <div class="absolute bottom-4 right-4">
            <Paginacao></Paginacao>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="m-8">
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { currentPageIndex,contents } from '../composible/sharedVariables';
import { lightDark } from '../sharedTheme';
</script>

<style>
.dark-theme {

}
</style>

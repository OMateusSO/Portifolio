<template>
  <video v-if="lightDark" src="/assets/videos/0701(1).mp4" class="video-bg" autoplay loop plays-inline muted></video>
  <Nav></Nav>
  <div :class="{ 'dark-theme': lightDark }" class="flex items-center justify-center h-screen" >
    <p>Sistema de Login</p>
  </div>
  <Foot></Foot>
</template>

<script setup lang="ts">
import { lightDark } from '@/sharedTheme';
</script>

<style>
.dark-theme {

}

.video-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.7;
  filter: brightness(1.2) contrast(1.2);
}

.content {
  position: relative;
  z-index: 1;
  min-height: 100vh; /* Para garantir que o conteúdo preencha pelo menos a tela inteira */
}
</style>
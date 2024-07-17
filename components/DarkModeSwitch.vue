<template>
  <label for="darkModeSwitch" class="cursor-pointer">
    <input type="checkbox" id="darkModeSwitch" class="hidden" v-model="lightDark">
    <div class="relative w-12 h-6 bg-gray-400 rounded-full shadow-inner">
      <div :class="{ 'translate-x-6': lightDark }" class="absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition"></div>
    </div>
  </label>
</template>

<script setup lang="ts">
import { lightDark } from '../sharedTheme';
</script>


<style scoped>
.dark {

}

input[type="checkbox"]:checked + .transform {
  @apply translate-x-6;
}
</style>

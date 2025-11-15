<template>
  <div class="p-10 animate-fade-in">
    <h1 class="text-4xl mb-6 text-red-300 font-bold">Бестіарій</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Використовуємо імпортовану картинку -->
      <div class="dnd-card">
        <img :src="skeleton" alt="Skeleton" class="w-full rounded-md mb-4" />
        <h2 class="text-2xl mb-2">Анімований Скелет</h2>
        <p>Містична безтілесна скелетна істота, оживлена темною магією або некромантом.</p>
      </div>
    </div>
  </div>
</template>

<script>

import skeleton from '../assets/scilet.png'  // <-- Ось сюди прописуєш імпорт

export default {
  name: 'Bestiary',
  data() {
    return {
      skeleton
    }
  }
}
</script>

<style scoped>
/* стилі карток тут */
</style>

<template>
  <div class="min-h-screen bg-gray-900 text-gray-200 font-serif">
    <nav class="flex gap-6 px-10 py-5 bg-black/40 backdrop-blur shadow-lg sticky top-0 z-50 animate-fade-in">
      <router-link class="hover:text-red-400 transition" to="/">ііфвфів</router-link>
      <router-link class="hover:text-red-400 transition" to="/races">Раси</router-link>
      <router-link class="hover:text-red-400 transition" to="/classes">Класи</router-link>
      <router-link class="hover:text-red-400 transition" to="/bestiary">Бестіарій</router-link>
      <router-link class="hover:text-red-400 transition" to="/lore">Лор</router-link>
      <router-link class="hover:text-red-400 transition" to="/contact">Контакти</router-link>
    </nav>
    <router-view />
  </div>
</template>


<style>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}
</style>
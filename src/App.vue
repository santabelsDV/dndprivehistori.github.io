<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <header class="site-header">
      <nav>
        <RouterLink to="/">Дім</RouterLink>
        <RouterLink to="/race">Раси</RouterLink>
        <RouterLink to="/class">Класи</RouterLink>
        <RouterLink to="/bestiary">Бестіарій</RouterLink>
        <RouterLink to="/lore">Лор</RouterLink>
        <RouterLink to="/contacts">Контакти</RouterLink>
      </nav>
    </header>

    <main class="content-area">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* Прості стилі для контейнера, щоб нічого не "пливло" */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.site-header {
  background-color: #e8dfc5; /* Колір вашого меню */
  padding: 1rem;
  border-bottom: 2px solid #3a1f0f;
}

nav {
  display: flex;
  gap: 20px;
  justify-content: center; /* Центруємо посилання */
  flex-wrap: wrap;
}

nav a {
  text-decoration: none;
  color: #3a1f0f;
  font-weight: bold;
  font-size: 1.1rem;
}

nav a:hover {
  color: #9c4d2f;
}

.content-area {
  width: 100%;
  padding: 20px;
  /* Важливо: дозволяємо контенту розтягуватися */
  flex-grow: 1;
}
</style>
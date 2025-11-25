<template>
  <div class="p-10 animate-fade-in w-full">
    <h1 class="text-4xl mb-6 text-red-900 font-bold font-serif">Бестіарій</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">

      <div
          v-for="monster in monsters"
          :key="monster.id"
          class="dnd-card cursor-pointer group flex flex-col h-full overflow-hidden"
          @click="openMonster(monster.id)"
      >
        <div class="h-64 w-full overflow-hidden border-b border-gray-600">
          <img
              :src="monster.image"
              :alt="monster.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              @error="handleImageError($event)"
          />
        </div>

        <div class="p-4 flex-grow flex items-center justify-center bg-zinc-900">
          <h2 class="text-xl text-yellow-500 font-bold font-serif tracking-wide">
            {{ monster.name }}
          </h2>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import monsters from '../db/monsters.json'

export default {
  name: 'Bestiary',
  data() {
    return {
      monsters: monsters
    }
  },
  methods: {
    openMonster(id) {
      this.$router.push(`/monster/${id}`)
    },
    handleImageError(event) {
      // Заглушка, якщо картинки немає
      event.target.src = 'https://via.placeholder.com/300x400?text=No+Image'
    }
  }
}
</script>

<style scoped>
/* Стилізація самої картки */
.dnd-card {
  background-color: #1a1a1d; /* Темний фон */
  border: 2px solid #4a4a4a; /* Сіра рамка */
  border-radius: 12px;       /* Закруглені кути */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.dnd-card:hover {
  border-color: #fbbf24; /* Золота рамка при наведенні */
  box-shadow: 0 10px 15px rgba(251, 191, 36, 0.2);
  transform: translateY(-5px);
}
</style>
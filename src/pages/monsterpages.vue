<template>
  <div class="p-10 animate-fade-in max-w-3xl mx-auto" v-if="monster">
    <button
        @click="$router.back()"
        class="mb-6 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
    >
      ← Назад
    </button>

    <h1 class="text-4xl mb-6 text-red-300 font-bold text-center">{{ monster.name }}</h1>

    <img
        :src="monster.image"
        :alt="monster.name"
        class="w-full max-h-80 object-cover rounded-xl shadow-lg mb-8"
    />

    <div class="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
      <h2 class="text-2xl mb-4 font-semibold">Опис</h2>
      <p class="text-gray-300 leading-relaxed mb-6">{{ monster.description }}</p>

      <h2 class="text-2xl mb-3 font-semibold">Бойові характеристики</h2>
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>❤️ HP: <strong>{{ monster.stats.hp }}</strong></div>
        <div>🛡️ AC: <strong>{{ monster.stats.ac }}</strong></div>
        <div>⚔️ Challenge: <strong>{{ monster.stats.challenge }}</strong></div>
      </div>

      <h2 class="text-2xl mb-3 font-semibold">Параметри</h2>
      <div class="grid grid-cols-3 gap-4 text-center">
        <div class="p-3 bg-gray-800 rounded-lg">STR<br /><strong>{{ monster.stats.abilities.str }}</strong></div>
        <div class="p-3 bg-gray-800 rounded-lg">DEX<br /><strong>{{ monster.stats.abilities.dex }}</strong></div>
        <div class="p-3 bg-gray-800 rounded-lg">CON<br /><strong>{{ monster.stats.abilities.con }}</strong></div>
        <div class="p-3 bg-gray-800 rounded-lg">INT<br /><strong>{{ monster.stats.abilities.int }}</strong></div>
        <div class="p-3 bg-gray-800 rounded-lg">WIS<br /><strong>{{ monster.stats.abilities.wis }}</strong></div>
        <div class="p-3 bg-gray-800 rounded-lg">CHA<br /><strong>{{ monster.stats.abilities.cha }}</strong></div>
      </div>
    </div>
  </div>

  <div v-else class="text-center text-xl p-10">Монстра не знайдено...</div>
</template>

<script>
import monsters from '../db/monsters.json'

export default {
  name: 'MonsterPage',
  data() {
    return {
      monster: null
    }
  },
  created() {
    const id = parseInt(this.$route.params.id)
    this.monster = monsters.find(m => m.id === id)
  }
}
</script>

<style scoped>
</style>

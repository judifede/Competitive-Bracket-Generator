<template>
  <Heading tag="h2" additionalClasses="!text-2xl !h-[60px]">
    Torneo {{ gameData.tournamentName }}
  </Heading>

  <section class="flex flex-col gap-10">
    <article class="flex items-center justify-between min-w-[500px]">
      <button
        class="border-rounded-white px-4 py-2 hover:text-orange-500 hover:border-orange-500"
        @click="goBack"
      >
        Volver
      </button>

      <button
        @click="shufflePlayers"
        class="border-rounded-white px-4 py-2 font-medium border-orange-500 hover:text-orange-500"
      >
        Reordenar Bracket
      </button>

      <p>
        Formato:
        <span class="font-semibold text-orange-300">
          {{ gameData.tournamentFormat }}
        </span>
      </p>
    </article>
    <article>
      <Brackets :playersProps="playersProps"></Brackets>
    </article>

    <article class="flex justify-between gap-8">
      <div>
        <h1>Elegir ganador</h1>
      </div>
      <div>
        <h1>Historial</h1>
      </div>
    </article>
  </section>
</template>

<script setup>
import Heading from './Heading.vue'
import Brackets from './Brackets.vue'

import { ref, computed, watch } from 'vue'

const props = defineProps({
  gameData: {
    type: Object,
    required: true,
  },
})

const players = ref([])

players.value = props.gameData.tournamentPlayers.split(',')

const playersProps = computed(() => players.value)

const shuffleArr = (arr) => {
  return arr.sort(() => Math.random() - 0.5)
}

const shufflePlayers = () => {
  players.value = shuffleArr([...players.value])
  console.log(players.value)
}

// watch(
//   () => props.gameData.tournamentPlayers,
//   (newValue) => {
//     players.value = newValue.split(',')
//   }
// )

const emit = defineEmits(['go-back'])

const goBack = () => {
  emit('go-back')
}
</script>

<style scoped>
p {
  @apply font-medium;
}
</style>

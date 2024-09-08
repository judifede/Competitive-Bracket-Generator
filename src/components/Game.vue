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
    <article class="min-h-16 flex justify-center items-center">
      <Brackets :players="players" :winnerProps="winnerProps"></Brackets>
    </article>

    <article class="flex justify-between gap-8">
      <div>
        <!-- 
        TODO: Prueba 
        <button @click="newPlayers">Renovar brackets</button> -->
        <!-- <button @click="newPlayers2">Renovar brackets 2</button> -->
        <button @click="openUpdateModal">Actualizar brackets</button>
      </div>
      <div>
        <button @click="openWinnerModal">Elegir ganador</button>
      </div>
    </article>
  </section>
  <PlayersModal
    :showModal="isWinnerModalVisible"
    title="Elegir ganador"
    :winnerModal="true"
    :items="players"
    @winnerProps="handleWinnerProps"
    @close="closeWinnerModal"
  />

  <PlayersModal
    title="Actualizar brackets"
    :showModal="isUpdateModalVisible"
    :updatePlayers="true"
    :items="players"
    :handleUpdatePlayers="handleUpdatePlayers"
    @close="closeUpdateModal"
  />
</template>

<script setup>
import Heading from '../assets/Heading.vue'
import Brackets from './Brackets.vue'
import PlayersModal from './PlayersModal.vue'

import { ref, computed, watch } from 'vue'

const props = defineProps({
  gameData: {
    type: Object,
    required: true,
  },
})

const players = ref([])
const winnerProps = ref('')

const handleWinnerProps = (playerName) => {
  winnerProps.value = playerName
}

players.value = props.gameData.tournamentPlayers.split(',')
//TODO: Prueba
// const players = computed(() => players.value)

const shuffleArr = (arr) => {
  return arr.sort(() => Math.random() - 0.5)
}

const shufflePlayers = () => {
  players.value = shuffleArr([...players.value])
}

//TODO: Prueba
const newPlayers = () => {
  players.value = ['Cris', 'Juan Diego Fernández Déniz']
}

//TODO: Prueba
const newPlayers2 = () => {
  players.value = ['Juan Diego Fernández Déniz', 'Cris', 'Ari', 'Bryan']
}

const handleUpdatePlayers = (playerss) => {

  players.value = playerss.split(',')
  //TODO: Prueba
  // players.value = ['Juan Diego Fernández Déniz', 'Cris', 'Ari', 'Bryan']
}

const isWinnerModalVisible = ref(false)

const openWinnerModal = () => {
  isWinnerModalVisible.value = true
}

const closeWinnerModal = () => {
  isWinnerModalVisible.value = false
}

const isUpdateModalVisible = ref(false)

const openUpdateModal = () => {
  isUpdateModalVisible.value = true
}

const closeUpdateModal = () => {
  isUpdateModalVisible.value = false
}

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

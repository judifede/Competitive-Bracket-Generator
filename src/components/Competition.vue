<template>
  <Heading tag="h2" additionalClasses="!text-2xl !h-[60px]">
    {{competitionData.tournamentType}} {{ competitionData.tournamentName }}
  </Heading>

  <section class="flex flex-col gap-6">
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
          {{ competitionData.tournamentFormat }}
        </span>
      </p>
    </article>
    <article class="min-h-16 flex">
      <Brackets :players="players" :winnerProps="winnerProps"></Brackets>
    </article>

    <article class="flex justify-between gap-8">
      <div>
        <button 
        class="border-rounded-white px-4 py-2 font-medium border-orange-500 hover:text-orange-500"
        @click="openUpdateModal">Actualizar brackets</button>
      </div>
      <div>
        <button 
        class="border-rounded-white px-4 py-2 font-medium border-orange-500 hover:text-orange-500"
        @click="openWinnerModal">Elegir ganador</button>
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

import { ref } from 'vue'

const props = defineProps({
  competitionData: {
    type: Object,
    required: true,
  },
})

const players = ref([])
const winnerProps = ref('')

const handleWinnerProps = (playerName) => {
  winnerProps.value = playerName
}

players.value = props.competitionData.tournamentPlayers.split(',')

const shuffleArr = (arr) => {
  return arr.sort(() => Math.random() - 0.5)
}

const shufflePlayers = () => {
  players.value = shuffleArr([...players.value])
}

const handleUpdatePlayers = (playersUpdated) => {
  players.value = playersUpdated.split(',')
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

<style scoped lang="postcss">
p {
  @apply font-medium;
}
</style>

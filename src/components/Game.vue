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
      <Brackets :playersProps="playersProps" :winnerProps="winnerProps"></Brackets>
    </article>

    <article class="flex justify-between gap-8">
      <div>
        <button @click="newPlayers">Renovar brackets</button>
      </div>
      <div>
        <button @click="openModal">Elegir ganador</button>
      </div>
      <PlayersModal 
      :showModal="isModalVisible"
      :title="modalTitle"
      :items="players"
      @close="closeModal"
    />
    </article>
  </section>
</template>

<script setup>
import Heading from './Heading.vue'
import Brackets from './Brackets.vue'
import PlayersModal from './PlayersModal.vue';

import { ref, computed, watch } from 'vue'

const props = defineProps({
  gameData: {
    type: Object,
    required: true,
  },
})

const players = ref([])
const winnerProps = ref("")

players.value = props.gameData.tournamentPlayers.split(',')

const playersProps = computed(() => players.value)

const shuffleArr = (arr) => {
  return arr.sort(() => Math.random() - 0.5)
}

const shufflePlayers = () => {
  players.value = shuffleArr([...players.value])
  console.log(players.value)
}

const newPlayers = () => {
  players.value = ["Cris", "Diego"]
}




const isModalVisible = ref(false);
const modalTitle = ref('Lista de Elementos');
const modalItems = ref([
  'Elemento 1',
  'Elemento 2',
  'Elemento 3' 
]);

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

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

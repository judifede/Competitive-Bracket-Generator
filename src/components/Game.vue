<template>
  <Heading tag="h2" additionalClasses="!text-2xl !h-[60px]">
    Torneo {{ gameData.tournamentName }}
  </Heading>


  <p>Formato: 
    <span class="font-semibold text-orange-300">
      {{ gameData.tournamentFormat }}
    </span>
  </p>
  <p>Jugadores: {{ gameData.playerCount }}</p>
  <button @click="goBack">Volver</button>

</template>

<script setup>
import Heading from './Heading.vue'

const props = defineProps({
  gameData: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['go-back']);

const goBack = () => {
  emit('go-back');
};

</script>

<style scoped>
p{
  @apply font-medium
}
</style>

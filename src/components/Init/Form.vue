<template>
  <Heading tag="h2" additionalClasses="!text-2xl !h-[60px]">
    Configurar competición
  </Heading>
  <form @submit.prevent="submitForm">
    <section
      class="bg-[#323232] text-black md:px-12 px-6 !py-8 md:box !flex flex-col gap-form_gap"
    >
      <select id="type" name="type" v-model="tournamentType">
        <option value="Torneo">Torneo</option>
        <option value="Copa">Copa</option>
        <option value="Liga">Liga</option>
      </select>

      <input
        placeholder="Nombre de la Competición"
        type="text"
        id="name"
        name="name"
        :class="{ 'no-valid': !isFormValid }"
        v-model="tournamentName"
      />

      <select
        placeholder="Formato"
        id="format"
        name="format"
        v-model="tournamentFormat"
      >
        <option value="Single Elimination">Single Elimination</option>
        <option value="Double Elimination" disabled></option>
        <option value="Round Robin" disabled></option>
        <option value="Swiss" disabled></option>
        <option value="Free for all" disabled></option>
      </select>

      <FormPlayers
        id="players"
        name="players"
        @isTextAreaValid="handleIsTextAreaValid"
        v-model:players="tournamentPlayers.players"
      ></FormPlayers>

      <div v-if="!isFormValid" class="error-message">
        Todos los campos deben ser rellenados.
      </div>
      <div class="m-auto">
        <button
          class="inline-block border rounded-2xl px-4 py-2 font-medium bg-orange-400 enabled:hover:scale-125 transition-all duration-300"
          type="submit"
          :disabled="!isFormValid"
        >
          Enviar
        </button>
      </div>
    </section>
  </form>
</template>

<script setup>
import Heading from '../../assets/Heading.vue'
import FormPlayers from './FormPlayers.vue'
import capitalize from '../../utils/utils.js'

import { ref, reactive, computed } from 'vue'
/*
ref      -> variable de estado
reactive -> variable de estado de un objeto 
computed -> variable de estado con propiedades calculadas
*/

const tournamentName = ref('')
const tournamentType = ref('Torneo')
const tournamentFormat = ref('Single Elimination')

//FormPlayers
const tournamentPlayers = reactive({
  players: '',
})

const isTextAreaValid = ref(false)

const handleIsTextAreaValid = (state) => {
  isTextAreaValid.value = state
}
//End FormPlayers

const isFormValid = computed(() => {
  return (
    isTextAreaValid.value &&
    tournamentName.value !== '' &&
    tournamentType.value !== '' &&
    tournamentFormat.value !== ''
  )
})

const emit = defineEmits(['submit-form'])

const submitForm = () => {
  if (isFormValid.value && tournamentPlayers.players) {
    //Quitar saltos de línea y espacios de los extremos
    const formattedPlayers = tournamentPlayers.players.trim().replace(/\n/g, '')

    emit('submit-form', {
      tournamentName: capitalize(tournamentName.value),
      tournamentType: tournamentType.value,
      tournamentFormat: tournamentFormat.value,
      tournamentPlayers: formattedPlayers
        .split(',')
        .map((player) => capitalize(player.trim()))
        .join(', '),
    })
  }
}
</script>

<!-- TODO: CSS flecha de select  -->
<style scoped lang="postcss">
select{
}
</style>

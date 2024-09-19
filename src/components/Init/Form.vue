<template>
  <Heading tag="h2" additionalClasses="!text-2xl !h-[60px]">
    Configurar competición
  </Heading>
  <form @submit.prevent="submitForm">
    <section
      class="bg-[#323232] text-black px-12 py-8 box !flex flex-col gap-10"
    >
    <select
        id="type"
        name="type"
        v-model="tournamentType"
      >
        <option value="Torneo">Torneo</option>
        <option value="Copa">Copa</option>
        <option value="Liga">Liga</option>
      </select>

      <input
        placeholder="Nombre de la Competición"
        type="text"
        id="name"
        name="name"
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
        v-model:items="tournamentPlayers.items"
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
  items: '',
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
  if (isFormValid && tournamentPlayers.items) {
    //Quitar saltos de línea y espacios de los extremos
    tournamentPlayers.items = tournamentPlayers.items.trim().replace(/\n/g, '')

    emit('submit-form', {
      tournamentName: tournamentName,
      tournamentType: tournamentType,
      tournamentFormat: tournamentFormat,
      tournamentPlayers: tournamentPlayers.items,
    })
  }
}
</script>

<style scoped lang="postcss">
.no-valid {
  @apply border border-red-400;
}

.error-message {
  @apply text-red-500;
}

button:disabled {
  @apply bg-slate-300;
}

label {
  @apply text-white container-label;
}

input, select{
  @apply box-input bg-[#2A2A2A] text-white;
}

::placeholder {
  @apply !font-medium !text-white/80;
}
</style>

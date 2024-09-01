<template>
  <Heading tag="h2" additionalClasses="!text-2xl !h-[60px]">
    Configurar competición
  </Heading>
  <form @submit.prevent="submitForm">
    <section class="bg-white text-black
     px-4 py-2 box
     !flex flex-col gap-5">

      <label class="box container-label" for="name">
        Nombre:
        <input type="text" class="box-input bg-black/30 text-white" id="name" name="name" v-model="tournamentName">
      </label>


      <span class="box !w-full">
        <label class="container-label" for="format">
          Formato:
          <input type="text" class="box-input bg-black/30 text-white" list="formats" id="format" name="format"
            v-model="tournamentFormat">
        </label>
        <datalist id="formats">
          <option value="Single Elimination"></option>
          <option value="Double Elimination" disabled></option>
          <option value="Round Robin" disabled></option>
          <option value="Swiss" disabled></option>
          <option value="Free for all" disabled></option>
        </datalist>
      </span>

      <label class="box container-label" for="name">
        Añadir participante:
        <input type="text" class="box-input bg-black/30 text-white" id="name" name="name">
      </label>

      <div class="box m-auto">
        <button
        class="inline-block border rounded-2xl px-4 py-2 font-medium
        bg-orange-400 hover:scale-125 transition-all duration-300" type="submit">Submit</button>
      </div>
    </section>
  </form>
</template>

<script setup>
import Heading from './Heading.vue'

import { ref } from 'vue'

const tournamentName = ref('')
const tournamentFormat = ref('')
const playerCount = ref('')

const emit = defineEmits(['submit-form'])

const submitForm = () => {
  emit('submit-form', {
    tournamentName: tournamentName.value,
    tournamentFormat: tournamentFormat.value,
    playerCount: playerCount.value,
    // Agrega más campos según sea necesario
  })
}
</script>

<style scoped></style>

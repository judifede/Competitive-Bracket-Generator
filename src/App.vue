<template>
  
  <main class="flex flex-col gap-10 items-center">
    <Heading tag="h1">
      Competitive Bracket Generator
      <template v-slot:developed>
        <a href="http://judifede.github.io/" target="_blank">Desarrollado por Diego Fernández</a>
      </template>
    </Heading>

    <Form v-if="!showGame" @submit-form="handleFormSubmit" ></Form>
    <Game v-else :gameData="gameData" @go-back="handleGoBack" ></Game>
    
    <!-- <HelloWorld msg="Vite + Vue" /> -->
  </main>
</template>


<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
import Heading from './components/Heading.vue'
import Form from './components/Form.vue'
import Game from './components/Game.vue'

const showGame = ref(false)
const gameData = ref(null)

const handleFormSubmit = (formData) => {
  gameData.value = formData
  showGame.value = true
}

const handleGoBack = () => {
  showGame.value = false
}

</script>

<style scoped></style>

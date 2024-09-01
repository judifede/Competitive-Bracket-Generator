<template>
  
  <main class="flex flex-col gap-10 items-center">
    <Heading tag="h1">
      Competitive Bracket Generator
    </Heading>

    <Form v-if="!showGame" @submit-form="handleFormSubmit" ></Form>
    <Game v-else :gameData="gameData" @go-back="handleGoBack" ></Game>
    
    <!-- <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="35" width="180" height="30" fill="none" stroke="black"/><text x="5" y="55" font-size="14">Player 1</text><line x1="180" y1="50" x2="200" y2="50" stroke="black"/><line x1="200" y1="50" x2="200" y2="150" stroke="black"/><rect x="0" y="135" width="180" height="30" fill="none" stroke="black"/><text x="5" y="155" font-size="14">Player 2</text><line x1="180" y1="150" x2="200" y2="150" stroke="black"/><rect x="0" y="235" width="180" height="30" fill="none" stroke="black"/><text x="5" y="255" font-size="14">Player 3</text><line x1="180" y1="250" x2="200" y2="250" stroke="black"/><line x1="200" y1="250" x2="200" y2="350" stroke="black"/><rect x="0" y="335" width="180" height="30" fill="none" stroke="black"/><text x="5" y="355" font-size="14">Player 4</text><line x1="180" y1="350" x2="200" y2="350" stroke="black"/><rect x="200" y="85" width="180" height="30" fill="none" stroke="black"/><line x1="380" y1="100" x2="400" y2="100" stroke="black"/><line x1="400" y1="100" x2="400" y2="300" stroke="black"/><rect x="200" y="285" width="180" height="30" fill="none" stroke="black"/><line x1="380" y1="300" x2="400" y2="300" stroke="black"/><rect x="400" y="185" width="180" height="30" fill="none" stroke="black"/></svg> -->

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

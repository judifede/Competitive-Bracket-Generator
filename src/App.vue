<template>
  <main class="flex flex-col gap-10 items-center">
    <Heading tag="h1">
      Competition Bracket Generator
      <template v-slot:developed>
        <a href="http://judifede.github.io/" target="_blank"
          >Desarrollado por Diego Fernández</a
        >
      </template>
    </Heading>

    <Form v-if="!showCompetition" @submit-form="handleFormSubmit"></Form>
    <Competition
      v-else
      :competitionData="competitionData"
      @go-back="handleGoBack"
    ></Competition>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Heading from './assets/Heading.vue'
import Form from './components/Init/Form.vue'
import Competition from './components/Competition.vue'

const showCompetition = ref(false)
const competitionData = ref(null)

const handleFormSubmit = (formData) => {
  competitionData.value = formData
  showCompetition.value = true
}

const handleGoBack = () => {
  showCompetition.value = false
}
</script>

<style scoped></style>

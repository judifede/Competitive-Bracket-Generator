<template>
  <div>
    <textarea
      placeholder="Añadir participantes separados por coma (,)"
      class="box w-[281px] md:w-[370px] !bg-[#2A2A2A] text-white"
      :id="id"
      :name="name"
      :value="players"
      @input="handleInput"
      :class="{ 'no-valid': !isTextAreaValid }"
    ></textarea>
    <div v-if="!isTextAreaValid" class="error-message mt-form_gap">
      El contenido debe estar separado por comas.
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed } from 'vue'
/*
ref      -> variable de estado
reactive -> variable de estado de un objeto 
computed -> variable de estado con propiedades calculadas
*/

const props = defineProps(['players', 'id', 'name'])

const players = computed(() => props.players)

const isTextAreaValid = computed({
  get: () => players.value !== null && players.value.length > 0,
  set: (value) => {
    emit('isTextAreaValid', value)
  }
})

const emit = defineEmits(['update:players', 'isTextAreaValid'])

const validateTextArea = (value) => {
  if (value == null) {
    isTextAreaValid.value = false
    return
  }
  const textAreaContent = value.trim()

  if (textAreaContent === '') {
    isTextAreaValid.value = false
    return
  }

  if (textAreaContent.includes(',')) {
    const playersList = textAreaContent.split(',')
    isTextAreaValid.value = playersList.every((item) => item.trim() !== '')
  } else {
    isTextAreaValid.value = false
  }
}

const handleInput = (event) => {
  let newValue = event.target.value
  validateTextArea(newValue)
  newValue = newValue.trim().replace(/\n/g, '')
  emit('update:players', newValue)
}
</script>

<style lang="postcss" scoped>

</style>

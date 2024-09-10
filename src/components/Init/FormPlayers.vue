<template>
  <div>
    <textarea
      placeholder="Añadir participantes separados por coma (,)"
      class="box w-full !bg-[#2A2A2A] text-white"
      :id="id"
      :name="name"
      :value="items"
      @input="handleInput"
      :class="{ 'no-valid': !isTextAreaValid }"
    ></textarea>
    <div v-if="!isTextAreaValid" class="error-message">
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

const props = defineProps(['items', 'id', 'name'])

const isTextAreaValid = ref(false)

const emit = defineEmits(['update:items', 'isTextAreaValid'])

const validateTextArea = (value) => {
  if (value == null) {
    isTextAreaValid.value = false
    emit('isTextAreaValid', false)
    return
  }
  const textAreaContent = value.trim()

  if (textAreaContent === '') {
    isTextAreaValid.value = false
    return
  }

  if (textAreaContent.includes(',')) {
    const items = textAreaContent.split(',')
    isTextAreaValid.value = items.every((item) => item.trim() !== '')
  } else {
    isTextAreaValid.value = false
  }

  emit('isTextAreaValid', isTextAreaValid.value)
}

const handleInput = (event) => {
  let newValue = event.target.value
  validateTextArea(newValue)
  newValue = newValue.trim().replace(/\n/g, '')
  emit('update:items', newValue)
}

</script>

<style lang="postcss" scoped>
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

input {
  @apply box-input bg-[#2A2A2A] text-white;
}

::placeholder {
  @apply !font-medium !text-white/80;
}
</style>

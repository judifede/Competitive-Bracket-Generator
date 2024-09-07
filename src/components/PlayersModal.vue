<template>
  <vue-final-modal v-model="isOpen"
  classes="modal-container">
    <div class="modal-content">
        <h2>{{ title }}</h2>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
        </li>
      </ul>
      <button @click="closeModal">Cerrar</button>
    </div>
  </vue-final-modal>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  title: String,
  items: Array
})

const emit = defineEmits(['update:modelValue', 'close'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const closeModal = () => {
  isOpen.value = false
  emit('close')
}
</script>
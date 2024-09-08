<template>
  <div
    v-if="isOpen"
    @click="closeModal"
    class="bg-black opacity-15 absolute w-full h-full"
  ></div>
  <vue-final-modal
    v-model="isOpen"
    class="absolute inset-0 top-2/4 -translate-y-2/4"
  >
    <!-- classes="modal-container"
  content-class="modal-content" -->

    <div v-if="winnerModal" class="flex items-center justify-center h-full">
      <div
        class="bg-[#323232] p-6 rounded-lg shadow-lg flex flex-col gap-7 px-20 py-10 relative"
      >
        <h2 class="text-xl font-bold">{{ title }}</h2>
        <ul class="flex flex-col gap-5">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="p-2 cursor-pointer border border-purple-100"
            @click="setWinnerProps(item)"
          >
            {{ item }}
          </li>
        </ul>
        <Close @click="closeModal" class="cursor-pointer"></Close>
      </div>
    </div>

    <div v-if="updatePlayers" class="flex items-center justify-center h-full">
      <div
        class="bg-[#323232] p-6 rounded-lg shadow-lg flex flex-col gap-7 px-20 py-10 relative"
      >
        <h2 class="text-xl font-bold">{{ title }}</h2>

        <FormPlayers
          id="players"
          name="players"
          @isTextAreaValid="handleIsTextAreaValid"
          v-model:items="tournamentPlayers.items"
        ></FormPlayers>

        <Close @click="closeModal" class="cursor-pointer"></Close>
        <button @click="setUpdatePlayers" class="bg-[#2A2A2A] text-white px-4 py-2 rounded">
          Actualizar
        </button>
      </div>
    </div>
  </vue-final-modal>
</template>

<script setup>
import FormPlayers from './FormPlayers.vue'
import Close from '../assets/Close.vue'

import { ref, reactive, computed } from 'vue'

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  winnerModal: {
    type: Boolean,
    default: false,
  },
  updatePlayers: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  handleUpdatePlayers:{
    type: Function
  },
  items: {
    type: Array,
  },
})

const emit = defineEmits(['update:items', 'update:showModal', 'close', 'winnerProps'])

const setWinnerProps = (item) => {
  emit('winnerProps', item)
  emit('close')
}

//FormPlayers
const tournamentPlayers = reactive({
  items: '',
})

const isTextAreaValid = ref(false)

const handleIsTextAreaValid = (state) => {
  isTextAreaValid.value = state
}
//End FormPlayers

const setUpdatePlayers = () => {
  
  if(isTextAreaValid.value){
    props.handleUpdatePlayers(tournamentPlayers.items)
  }
}

const isOpen = computed({
  get: () => props.showModal,
  set: (value) => emit('update:showModal', value),
})

const closeModal = () => {
  isOpen.value = false
  emit('close')
}
</script>
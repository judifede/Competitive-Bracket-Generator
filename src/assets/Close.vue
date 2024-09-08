<template>
    <svg :class="['absolute right-3 top-2', additionalClasses]" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path
      d="M12 10.586L17.293 5.293a1 1 0 011.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707A1 1 0 016.707 5.293L12 10.586z"
      />
    </svg>
</template>

<script setup>

const props = defineProps({
  
  additionalClasses: {
    type: [String, Object, Array],
    default: ''
  }
})
</script>
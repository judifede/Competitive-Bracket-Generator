<template>
  <component :is="tag" :class="['box h-[70px] text-4xl text-orange-400', additionalClasses]">
    <slot></slot>
  </component>
</template>

<script setup>

const props = defineProps({
  tag: {
    type: String,
    default: 'h1'
  },
  additionalClasses: {
    type: [String, Object, Array],
    default: ''
  }
})
</script>

<style scoped></style>

<template>
  <component :is="tag" :class="['box h-[70px] text-4xl text-orange-400', additionalClasses]">
    <div class="inline-flex flex-col gap-3">
      <slot></slot> <!-- Slot por defecto -->
      <code class="text-sm self-end">
        <slot name="developed"></slot> <!-- Slot nombrado -->
      </code>
    </div>
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

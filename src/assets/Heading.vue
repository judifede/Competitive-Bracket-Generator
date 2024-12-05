<template>
  <component
    :is="tag"
    :class="['box md:h-[70px] text-4xl text-orange-400', additionalClasses]"
  >
    <div class="inline-flex flex-col gap-3">
      <slot></slot>
      <!-- Slot por defecto -->
      <template v-if="$slots.developed">
        <code class="text-sm self-end">
          <slot name="developed"></slot>
          <!-- Slot nombrado developed-->
        </code>
      </template>
    </div>
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'h1',
  },
  additionalClasses: {
    type: [String, Object, Array],
    default: '',
  },
})
</script>

<style scoped></style>

<template>
  <svg :width="svgWidth" :height="svgHeight">
    <g v-for="(player, index) in players" :key="index">
      <!-- Rectángulo para cada jugador -->
      <rect
        :x="0"
        :y="index * (rectHeight + gap)"
        :width="rectWidth"
        :height="rectHeight"
        fill="none"
        stroke="white"
      />

      <!-- Texto para cada jugador -->
      <text
        :x="5"
        :y="index * (rectHeight + gap) + 20"
        font-size="14"
        fill="white"
      >
        {{ player }}
      </text>

      <!-- Línea de conexión -->
      <line
        :x1="rectWidth"
        :y1="index * (rectHeight + gap) + rectHeight / 2"
        :x2="rectWidth + lineLength"
        :y2="index * (rectHeight + gap) + rectHeight / 2"
        stroke="white"
      />

      <!-- Línea vertical para conectar los jugadores -->
      <line
        v-if="index % 2 === 1"
        :x1="rectWidth + lineLength"
        :y1="(index - 1) * (rectHeight + gap) + rectHeight / 2"
        :x2="rectWidth + lineLength"
        :y2="index * (rectHeight + gap) + rectHeight / 2"
        stroke="white"
      />
    </g>

    <!-- Trofeo de ganador -->
    <g
      :transform="`translate(${rectWidth + lineLength * 2 + rectWidth / 2.4},${
        svgHeight / 2 - rectHeight / 2 - 20
      }) scale(${0.0032},-${0.0032})`"
      class="fill-orange-400"
    >
      <path
        d="M3684 12777 c29 -118 741 -2470 911 -3012 166 -528 325 -978 394
        -1113 l20 -40 -67 -40 c-123 -73 -168 -161 -204 -396 -24 -165 -41 -222 -80
        -281 -42 -63 -104 -107 -293 -210 -169 -92 -325 -187 -440 -269 -1271 -908
        -1841 -2501 -1435 -4007 272 -1004 956 -1857 1880 -2342 390 -205 806 -336
        1275 -403 177 -25 633 -30 835 -9 858 87 1630 446 2239 1039 633 618 1012
        1405 1107 2299 20 189 14 660 -10 832 -77 540 -243 1020 -502 1450 -372 616
        -861 1073 -1526 1425 -292 155 -332 205 -372 465 -38 243 -81 340 -178 401
        -30 19 -38 30 -33 42 60 142 169 496 279 910 146 545 826 3241 826 3272 0 7
        -290 10 -902 10 l-903 0 -82 -328 c-236 -938 -333 -1319 -340 -1334 -7 -14
        -252 794 -489 1610 l-16 52 -950 0 -950 0 6 -23z m1474 -4452 l32 -45 638 0
        c351 0 768 3 926 7 287 6 288 6 310 30 22 23 22 24 40 4 40 -44 24 -176 -28
        -239 -45 -53 -147 -65 -307 -37 -471 81 -904 80 -1383 -6 -191 -34 -270 -23
        -318 42 -49 65 -63 165 -32 217 14 24 70 72 84 72 4 0 20 -20 38 -45z"
      />
    </g>

    <!-- Rectángulo final para el ganador -->
    <g>
      <rect
      :x="rectWidth + lineLength * 2"
      :y="svgHeight / 2 - rectHeight / 2"
      :width="rectWidth"
      :height="rectHeight"
      fill="none"
      stroke="orange"
      />
      <!-- Texto ganador -->
      <text
        :x="rectWidth + lineLength * 2 + rectWidth / 2.4"
        :y="(svgHeight / 2 - rectHeight / 2) + 20"
        font-size="14"
        fill="white"
      >
        {{ winnerProps }}
        winner
      </text>
    </g>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  playersProps: {
    type: Array,
    required: true,
  },
  winnerProps: {
    type: String,
    required: true,
  },
})

const rectWidth = computed(() => {
  return (
    Math.max(...props.playersProps.map((name) => name.toString().length)) * 10
  )
})

const rectHeight = 30
const gap = 40
const lineLength = 30

const svgWidth = computed(() => rectWidth.value * 3 + lineLength * 2)
const svgHeight = computed(() =>
  Math.max(
    props.playersProps.length * (rectHeight + gap * 1.2),
    rectHeight + gap
  )
)

const players = computed(() => props.playersProps)
</script>

<style scoped>
text {
  fill: white;
}
</style>

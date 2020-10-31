<template>
  <svg height="260" width="300">
    <line id="floor" x1="10" y1="250" x2="290" y2="250" />
    <line v-if="step > 0" id="pole" x1="100" y1="250" x2="100" y2="20" />
    <line v-if="step > 1" id="beam" x1="100" y1="20" x2="200" y2="20" />
    <line v-if="step > 2" id="joist" x1="100" y1="60" x2="150" y2="20" />
    <line v-if="step > 3" id="rope" x1="200" y1="20" x2="200" y2="60" />
    <g id="man">
      <g id="head" v-if="step > 4">
        <circle
          cx="200"
          cy="80"
          r="20"
          stroke="black"
          stroke-width="4"
          fill="white"
        />
        <g id="normal-eyes" v-if="step <= 7">
          <circle cx="193" cy="80" r="4" />
          <circle cx="207" cy="80" r="4" />
        </g>
        <g id="dead-eyes" v-if="step > 7">
          <line x1="190" y1="78" x2="196" y2="84" />
          <line x1="204" y1="78" x2="210" y2="84" />
          <line x1="190" y1="84" x2="196" y2="78" />
          <line x1="204" y1="84" x2="210" y2="78" />
        </g>
      </g>
      <g id="torso">
        <line v-if="step > 5" id="body" x1="200" y1="100" x2="200" y2="150" />
        <g id="arms" v-if="step > 6">
          <line id="armL" x1="200" y1="120" x2="170" y2="140" />
          <line id="armR" x1="200" y1="120" x2="230" y2="140" />
        </g>
      </g>
      <g id="legs" v-if="step > 7">
        <line id="legL" x1="200" y1="150" x2="180" y2="190" />
        <line id="legR" x1="200" y1="150" x2="220" y2="190" />
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    step: {
      type: Number,
      default: 0
    }
  }
});
</script>

<style lang="stylus" scoped>
svg
  margin 0 auto

line
  stroke black
  stroke-width 4
</style>

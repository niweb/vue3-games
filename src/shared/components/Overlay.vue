<template>
  <div class="root">
    <div v-if="open" class="overlay">
      <slot name="overlay"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="stylus" scoped>
.root
  position: relative

.overlay
  position absolute
  width 100%
  height 100%
  background-color rgba(255,255,255,.85)
</style>

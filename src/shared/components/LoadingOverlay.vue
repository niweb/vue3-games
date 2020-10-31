<template>
  <Overlay :open="loading">
    <template v-slot:overlay>
      <div class="loading">
        Loading...
      </div>
    </template>
    <slot></slot>
  </Overlay>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Overlay from "@/shared/components/Overlay.vue";

export default defineComponent({
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Overlay
  }
});
</script>

<style lang="stylus" scoped>
.loading
  height 100%
  display flex
  align-items center
  justify-content center
</style>

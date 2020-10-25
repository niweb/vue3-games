<template>
  <div>
    {{ value }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped lang="stylus">
div
  display flex
  justify-content center
  align-items center

  font-size 4em
  color white
  background-color black
</style>

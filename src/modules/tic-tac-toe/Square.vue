<template>
  <button @click="markField" :disabled="value !== null">
    {{ value }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    }
  },

  setup(props, { emit }) {
    return {
      markField() {
        emit("mark-field");
      }
    };
  }
});
</script>

<style scoped lang="stylus">
button
  display flex
  justify-content center
  align-items center
  padding 0

  border none
  outline none

  font-size 4em
  user-select none
  color black
  background-color #fff

  &:not(:disabled)
    cursor pointer
    &:hover
      background-color #efefef
</style>

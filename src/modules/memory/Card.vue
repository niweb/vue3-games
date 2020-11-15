<template>
  <Button @click="turnCard" :disabled="open || found">
    <span v-if="open || found">
      {{ value }}
    </span>
  </Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    },
    found: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    return {
      turnCard() {
        emit("turn-card");
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

  cursor pointer
  border none
  outline none
  border-radius 5px

  font-size 4em
  user-select none
  color white
  background-color #111

  &:hover
    background-color #222
</style>

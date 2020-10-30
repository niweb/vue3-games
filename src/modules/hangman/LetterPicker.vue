<template>
  <div class="letters">
    <button
      v-for="letter in letters"
      :key="letter"
      :disabled="disabledLetters.includes(letter)"
      @click="onButtonClick(letter)"
    >
      {{ letter }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    disabledLetters: {
      type: Array as () => string[],
      default: []
    }
  },

  components: {},

  setup(props, { emit }) {
    return {
      letters: Array.from("abcdefghijklmnopqrstuvwxyz".toUpperCase()),
      onButtonClick(letter: string) {
        emit("pick", letter);
      }
    };
  }
});
</script>

<style scoped lang="stylus">
.letters
  display flex
  flex-wrap wrap
  justify-content center

button
  font-size 2em
  cursor pointer
  margin 5px
</style>

<template>
  <Game :done="done" @new-game="done = false">
    <template v-slot:done>
      <h3>🎉 DONE! 🎉</h3>
    </template>
    ⚠ This is still WIP. Don't worry, it will be more exciting soon. :)
    <Hangman @done="done = true"></Hangman>
  </Game>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Hangman from "@/modules/hangman/Board.vue";
import Game from "@/shared/components/Game.vue";

export default defineComponent({
  components: {
    Hangman,
    Game
  },

  setup() {
    const done = ref(false);
    return {
      done
    };
  }
});
</script>

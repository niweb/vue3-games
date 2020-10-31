<template>
  <Game :done="endStats.won !== null" @new-game="resetGame">
    <template v-slot:done>
      <h3 v-if="endStats.won">🎉 You won! 🎉</h3>
      <h3 v-else>You lost 😥</h3>
      <h4>The word was: {{ endStats.word }}</h4>
    </template>
    <Hangman @done="onGameEnd"></Hangman>
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
    const initialEndStats = {
      won: null as null | boolean,
      word: null as null | string
    };
    const endStats = ref(initialEndStats);

    return {
      endStats,
      onGameEnd({ won, word }: { won: boolean; word: string }) {
        endStats.value = {
          won,
          word
        };
      },
      resetGame() {
        endStats.value = initialEndStats;
      }
    };
  }
});
</script>

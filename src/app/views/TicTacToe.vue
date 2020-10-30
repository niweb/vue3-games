<template>
  <Game :done="done" @new-game="resetGame">
    <template v-slot:done>
      <h3 v-if="winner === null">It's a tie 👔</h3>
      <h3 v-else-if="winner === 'O'">Computer beat you 💪💻</h3>
      <h3 v-else-if="winner === 'X'">You won! 🥳</h3>
    </template>
    <TicTacToeBoard @done="finishGame"></TicTacToeBoard>
  </Game>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TicTacToeBoard from "@/modules/tic-tac-toe/Board.vue";
import { SquareValue } from "@/modules/tic-tac-toe/types";
import Game from "@/shared/components/Game.vue";

export default defineComponent({
  components: {
    TicTacToeBoard,
    Game
  },

  setup() {
    const done = ref(false);
    const winner = ref<SquareValue>(null);
    return {
      done,
      winner,
      resetGame() {
        done.value = false;
        winner.value = null;
      },
      finishGame(w: SquareValue) {
        done.value = true;
        winner.value = w;
      }
    };
  }
});
</script>

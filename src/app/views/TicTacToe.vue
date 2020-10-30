<template>
  <Overlay :open="done">
    <template v-slot:overlay>
      <h3 v-if="winner === null">It's a tie 👔</h3>
      <h3 v-else-if="winner === 'O'">Computer beat you 💪💻</h3>
      <h3 v-else-if="winner === 'X'">You won! 🥳</h3>
      <button @click="newGame">New Game</button>
    </template>
    <TicTacToeBoard @done="gameOver" :key="gameId"></TicTacToeBoard>
    <button @click="newGame">New Game</button>
  </Overlay>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TicTacToeBoard from "@/modules/tic-tac-toe/Board.vue";
import { SquareValue } from "@/modules/tic-tac-toe/types";
import Overlay from "@/shared/components/Overlay.vue";

export default defineComponent({
  components: {
    TicTacToeBoard,
    Overlay
  },

  setup() {
    const gameId = ref(0);
    const done = ref(false);
    const winner = ref<SquareValue>(null);
    return {
      done,
      winner,
      gameId,
      newGame() {
        gameId.value++;
        done.value = false;
        winner.value = null;
      },
      gameOver(w: SquareValue) {
        done.value = true;
        winner.value = w;
      }
    };
  }
});
</script>

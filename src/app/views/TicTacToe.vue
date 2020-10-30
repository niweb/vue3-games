<template>
  <div class="tic-tac-toe">
    <div v-if="done" class="done">
      <h3 v-if="winner === null">It's a tie 👔</h3>
      <h3 v-else-if="winner === 'O'">Computer beat you 💪💻</h3>
      <h3 v-else-if="winner === 'X'">You won! 🥳</h3>
      <button @click="newGame">New Game</button>
    </div>
    <TicTacToeBoard @done="gameOver" :key="gameId"></TicTacToeBoard>
    <button @click="newGame">New Game</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TicTacToeBoard from "@/modules/tic-tac-toe/Board.vue";
import { SquareValue } from "@/modules/tic-tac-toe/types";

export default defineComponent({
  components: {
    TicTacToeBoard
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

<style lang="stylus" scoped>
.tic-tac-toe
  position: relative

.done
  position absolute
  width 100%
  height 100%
  background-color rgba(255,255,255,.85)
  padding-top 50px
</style>

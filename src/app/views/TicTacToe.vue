<template>
  <div class="tic-tac-toe">
    <div v-if="done" class="done">
      <h3>🎉 DONE! 🎉</h3>
      <button @click="newGame">New Game</button>
    </div>
    <p>
      ⚠ This is still WIP and does not yet check if someone won.
    </p>
    <TicTacToeBoard @done="done = true" :key="gameId"></TicTacToeBoard>
    <button @click="newGame">New Game</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TicTacToeBoard from "@/modules/tic-tac-toe/Board.vue";

export default defineComponent({
  components: {
    TicTacToeBoard
  },

  setup() {
    const gameId = ref(0);
    const done = ref(false);
    return {
      done,
      gameId,
      newGame() {
        gameId.value++;
        done.value = false;
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

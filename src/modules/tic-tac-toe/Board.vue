<template>
  <div class="board">
    <Square
      v-for="(value, index) in squares"
      :key="index"
      :value="value"
      @mark-field="markField(index)"
    ></Square>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import Square from "@/modules/tic-tac-toe/Square.vue";
import { SquareValue } from "@/modules/tic-tac-toe/types";
import { useGameOver } from "@/modules/tic-tac-toe/functions/gameOver";
import { useComputerMove } from "@/modules/tic-tac-toe/functions/computerMove";

export default defineComponent({
  components: {
    Square
  },

  setup(props, { emit }) {
    const squares = ref<Array<SquareValue>>(Array(9).fill(null));
    const { winner, gameOver } = useGameOver(squares);
    const { computerMove } = useComputerMove(squares);

    watch(gameOver, () => {
      emit("done", winner.value);
    });

    return {
      squares,
      markField(id: number) {
        squares.value[id] = "X";
        if (!winner.value && !gameOver.value) {
          squares.value[computerMove()] = "O";
        }
      }
    };
  }
});
</script>

<style scoped lang="stylus">
.board
  display grid
  grid-template-columns repeat(3, 100px)
  grid-template-rows repeat(3, 100px)
  grid-gap 10px

  width fit-content
  margin auto
  margin-bottom 30px

  background-color #222
</style>

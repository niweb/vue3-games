<template>
  <div class="board">
    <Square
      v-for="(value, index) in squares"
      :key="index"
      :value="value"
      @mark-field="markField(index)"
    ></Square>
    <h3 v-if="done">
      DONE!
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Square from "@/modules/tic-tac-toe/Square.vue";
import { getRandomElement } from "@/shared/helpers/array";

export default defineComponent({
  components: {
    Square
  },

  setup(props, { emit }) {
    const squares = ref<Array<string | null>>(Array(9).fill(null));
    const freeSquareIndexes = computed(() =>
      squares.value
        .map((value, index) => ({ value, index }))
        .filter(item => item.value === null)
        .map(item => item.index)
    );
    const done = computed(() => {
      if (freeSquareIndexes.value.length < 1) {
        emit("done");
      }
    });

    const computerMove = () => {
      const index = getRandomElement(freeSquareIndexes.value);
      squares.value[index] = "O";
    };

    return {
      squares,
      done,
      markField(id: number) {
        squares.value[id] = "X";
        computerMove();
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

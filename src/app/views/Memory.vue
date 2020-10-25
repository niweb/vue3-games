<template>
  <div class="memory">
    <div v-if="done" class="done">
      <h3>🎉 DONE! 🎉</h3>
      <button @click="newGame">New Game</button>
    </div>
    <MemoryBoard :pairs="8" @done="done = true" :key="gameId"></MemoryBoard>
    <button @click="newGame">New Game</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MemoryBoard from "@/modules/memory/Board.vue";

export default defineComponent({
  components: {
    MemoryBoard
  },

  setup() {
    const gameId = ref(0);
    const done = ref(false);
    return {
      done,
      gameId,
      newGame() {
        console.log("newGame");
        gameId.value++;
        done.value = false;
      }
    };
  }
});
</script>

<style lang="stylus" scoped>
.memory
  position: relative

.done
  position absolute
  width 100%
  height 100%
  background-color rgba(255,255,255,.85)
  padding-top 50px
</style>

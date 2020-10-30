<template>
  <Overlay :open="done">
    <template v-slot:overlay>
      <h3>🎉 DONE! 🎉</h3>
      <button @click="newGame">New Game</button>
    </template>
    <MemoryBoard :pairs="8" @done="done = true" :key="gameId"></MemoryBoard>
    <button @click="newGame">New Game</button>
  </Overlay>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MemoryBoard from "@/modules/memory/Board.vue";
import Overlay from "@/shared/components/Overlay.vue";

export default defineComponent({
  components: {
    MemoryBoard,
    Overlay
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

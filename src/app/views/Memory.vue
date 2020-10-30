<template>
  <Game :done="done" @new-game="done = false">
    <template v-slot:done>
      <h3>🎉 DONE! 🎉</h3>
    </template>
    <MemoryBoard :pairs="8" @done="done = true"></MemoryBoard>
  </Game>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MemoryBoard from "@/modules/memory/Board.vue";
import Game from "@/shared/components/Game.vue";

export default defineComponent({
  components: {
    MemoryBoard,
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

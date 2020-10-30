<template>
  <Overlay :open="done">
    <template v-slot:overlay>
      <div class="overlay-content">
        <slot name="done"></slot>
        <button @click="newGame">New Game</button>
      </div>
    </template>
    <slot :key="gameId"></slot>
    <button @click="newGame">New Game</button>
  </Overlay>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Overlay from "@/shared/components/Overlay.vue";

export default defineComponent({
  props: {
    done: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Overlay
  },
  setup(props, { emit }) {
    const gameId = ref(0);
    return {
      gameId,
      newGame() {
        gameId.value++;
        emit("new-game");
      }
    };
  }
});
</script>

<style lang="stylus" scoped>
.overlay-content
  padding-top 50px
</style>

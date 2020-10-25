<template>
  <div class="memory">
    <h1>Play Memory</h1>
    <MemoryBoard pairs="6"></MemoryBoard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MemoryBoard from "@/modules/memory/Board.vue";

export default defineComponent({
  components: {
    MemoryBoard
  }
});
</script>

<template>
  <h1>Hello! 👋</h1>
  Play <router-link :to="paths.memory">Memory</router-link> or
  <router-link :to="paths.ticTacToe">Tic Tac Toe</router-link> or
  <router-link :to="paths.hangman">Hangman</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { paths } from "@/shared/statics";

export default defineComponent({
  setup() {
    return {
      paths
    };
  }
});
</script>

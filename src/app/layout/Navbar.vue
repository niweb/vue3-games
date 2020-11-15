<template>
  <Menubar :model="items"></Menubar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menubar from "primevue/menubar";

import { paths } from "@/shared/statics";

export default defineComponent({
  components: {
    Menubar
  },

  setup() {
    return {
      paths,
      items: [
        {
          icon: "pi pi-fw pi-home",
          to: paths.home
        },
        {
          label: "Memory",
          to: paths.memory
        },
        {
          label: "Tic Tac Toe",
          to: paths.ticTacToe
        },
        {
          label: "Hangman",
          to: paths.hangman
        }
      ]
    };
  }
});
</script>

<style scoped lang="stylus"></style>

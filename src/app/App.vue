<template>
  <nav>
    <router-link :to="paths.home">Home</router-link> -
    <router-link :to="paths.memory">Memory</router-link> -
    <router-link :to="paths.ticTacToe">Tic Tac Toe</router-link>
  </nav>
  <main>
    <router-view />
  </main>
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

<style lang="stylus">
body
  margin 0

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

nav
  padding 20px
  background-color #2c3e50
  color white

  a
    color white
    text-decoration none

    &:hover
      text-decoration underline

main
  margin-top 60px
</style>

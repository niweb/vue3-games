<template>
  <nav>
    <Navbar></Navbar>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/app/layout/Navbar.vue";

export default defineComponent({
  components: { Navbar }
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

main
  margin-top 60px
</style>

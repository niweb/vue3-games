<template>
  <div :style="cssVars">
    <div class="board">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :value="card"
        color="black"
      ></Card>
    </div>
    <button @click="shuffleCards">Shuffle</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Card from "@/modules/memory/Card.vue";

export default defineComponent({
  props: {
    pairs: {
      type: Number,
      default: 6
    }
  },

  components: {
    Card
  },

  setup(props) {
    const letters = getRandomLetters(props.pairs);
    const cards = ref([...letters, ...letters]);
    const shuffleCards = () => shuffleArray(cards.value);

    const gridColumns = Math.ceil(Math.sqrt(cards.value.length));
    const gridRows = Math.ceil(cards.value.length / gridColumns);

    return {
      cards,
      shuffleCards,
      cssVars: {
        "--grid-columns": gridColumns,
        "--grid-rows": gridRows
      }
    };
  }
});

const getRandomLetters = (amount: number) => {
  const options = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const letters = [];
  for (let i = 0; i < amount; i++) {
    const index = Math.floor(Math.random() * options.length);
    letters.push(options[index]);
    options.splice(index, 1);
  }
  return letters;
};

const shuffleArray = (array: Array<unknown>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
</script>

<style scoped lang="stylus">
.board
  display grid
  grid-template-columns repeat(var(--grid-columns), 100px)
  grid-template-rows repeat(var(--grid-rows), 100px)
  grid-gap 10px

  width fit-content
  margin auto
  margin-bottom 30px
</style>

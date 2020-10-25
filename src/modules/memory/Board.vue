<template>
  <div :style="cssVars">
    <div class="board">
      <Card
        v-for="(value, index) in cards"
        :key="index"
        :value="value"
        :found="foundPairs.includes(value)"
        :open="openCards.includes(index)"
        @turn-card="turnCard(index)"
      ></Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Card from "@/modules/memory/Card.vue";
import { shuffleArray } from "@/shared/helpers/array";

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

  setup(props, { emit }) {
    const values = getRandomEmojis(props.pairs);
    const cards = ref([...values, ...values]);
    const shuffleCards = () => shuffleArray(cards.value);
    shuffleCards();

    const gridColumns = Math.ceil(Math.sqrt(cards.value.length));
    const gridRows = Math.ceil(cards.value.length / gridColumns);

    const openCards = ref<number[]>([]);
    const foundPairs = ref<string[]>([]);

    const turnCard = (turnedCard: number) => {
      if (openCards.value.length === 2) {
        openCards.value = [];
      }
      openCards.value.push(turnedCard);
      if (openCards.value.length === 2) {
        const allCards = cards.value;
        if (allCards[openCards.value[0]] === allCards[openCards.value[1]]) {
          foundPairs.value.push(allCards[openCards.value[0]]);
        }
      }
      if (foundPairs.value.length === props.pairs) {
        emit("done");
      }
    };

    return {
      cards,
      openCards,
      foundPairs,
      shuffleCards,
      turnCard,
      cssVars: {
        "--grid-columns": gridColumns,
        "--grid-rows": gridRows
      }
    };
  }
});

const getRandomEmojis = (amount: number) => {
  const options = Array.from(
    "🤤😘😊😂😍😒😁👍😎😉🎉😜👀🤢🤔🤗😴🥱🤯🥵🥶🤓🙈🐶🐺🐱🦁🦊🦝🐨🦄🐽🦘🐫🐘🦥🦕🦖🐙🐳"
  );
  const letters = [];
  for (let i = 0; i < amount; i++) {
    const index = Math.floor(Math.random() * options.length);
    letters.push(options[index]);
    options.splice(index, 1);
  }
  return letters;
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

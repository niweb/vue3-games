<template>
  <div class="board">
    <div class="word">
      <span v-for="(letter, index) in displayedWord" :key="index">
        {{ letter ? letter : "_" }}
      </span>
    </div>
    <HangingMan class="man" :step="chosenLetters.length"></HangingMan>
    <LetterPicker
      class="letter-picker"
      :disabledLetters="chosenLetters"
      @pick="chooseLetter"
    ></LetterPicker>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import LetterPicker from "@/modules/hangman/LetterPicker.vue";
import HangingMan from "@/modules/hangman/HangingMan.vue";
import { watchDeep } from "@/shared/helpers/vue";

export default defineComponent({
  components: {
    HangingMan,
    LetterPicker
  },

  setup(props, { emit }) {
    //todo get random word
    //https://www.wordgenerator.net/application/p.php?type=1&id=nouns&spaceflag=false

    const word = ref(Array.from("Foo".toUpperCase()));
    const chosenLetters = ref<string[]>([]);

    const announceGameEnd = won => {
      emit("done", { won, word: word.value.reduce((acc, curr) => acc + curr) });
    };

    const displayedWord = computed(() => {
      return word.value.map(letter =>
        chosenLetters.value.includes(letter) ? letter : null
      );
    });
    watchDeep(displayedWord, () => {
      if (displayedWord.value.every(v => v !== null)) {
        announceGameEnd(true);
      }
    });

    const wrongGuesses = computed(() => {
      return chosenLetters.value.filter(v => !word.value.includes(v));
    });
    watchDeep(wrongGuesses, () => {
      if (wrongGuesses.value.length > 7) {
        announceGameEnd(false);
      }
    });

    return {
      chosenLetters,
      displayedWord,
      chooseLetter(letter: string) {
        chosenLetters.value.push(letter);
      }
    };
  }
});
</script>

<style scoped lang="stylus">
.board
  margin auto
  max-width fit-content

  display grid
  grid-template-columns 1fr 1fr
  grid-template-rows 1fr 1fr

  grid-template-areas "word man" "letters man"
  align-items center

.word
  grid-area word
  font-size 5rem
  font-family monospace
  span
    margin 0 5px

.letter-picker
  grid-area letters

.man
  grid-area man
</style>

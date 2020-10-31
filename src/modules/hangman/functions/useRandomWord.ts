import { onMounted, ref } from "vue";

export const useRandomWord = () => {
  const word = ref<string[]>([]);
  const loading = ref(true);

  onMounted(async () => {
    const res = await fetch(
      "https://spooky-plague-58749.herokuapp.com/" +
        "https://www.wordgenerator.net/application/p.php?type=1&id=nouns&spaceflag=false"
    );
    const words = await res.text();
    word.value = Array.from(words.split(",")[0].toUpperCase());
    loading.value = false;
  });

  return {
    word,
    loading
  };
};

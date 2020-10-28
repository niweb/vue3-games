export const shuffleArray = <T = unknown>(array: Array<T>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const getRandomIndex = <T = unknown>(array: Array<T>) =>
  Math.floor(Math.random() * array.length);

export const getRandomElement = <T = unknown>(array: Array<T>) =>
  array[getRandomIndex(array)];

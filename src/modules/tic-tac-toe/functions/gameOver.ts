import { watch, Ref, ref } from "vue";
import { SquareValue } from "@/modules/tic-tac-toe/types";

type GameOverFunction = (
  squares: Ref<Array<SquareValue>>
) => {
  winner: Ref<SquareValue>;
  gameOver: Ref<boolean>;
};

export const useGameOver: GameOverFunction = squares => {
  const winner = ref<SquareValue>(null);
  const gameOver = ref(false);

  const winningLines = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonals
    [0, 4, 8],
    [2, 4, 6]
  ];

  const checkForWinner = () => {
    const sq = squares.value;
    winningLines.some(indexes => {
      const firstLineValue = sq[indexes[0]];
      const allLineValuesMatch = indexes
        .map(i => sq[i])
        .every(value => value === firstLineValue);
      if (allLineValuesMatch && firstLineValue !== null) {
        winner.value = firstLineValue;
        return;
      }
    });
  };

  const checkForGameOver = () => {
    const allSquaresFilled = squares.value.every(v => v !== null);
    if (winner.value || allSquaresFilled) {
      gameOver.value = true;
    }
  };

  watch(
    squares,
    () => {
      checkForWinner();
      checkForGameOver();
    },
    {
      deep: true
    }
  );

  return {
    winner,
    gameOver
  };
};

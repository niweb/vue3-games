import { Ref, computed } from "vue";
import { SquareValue } from "@/modules/tic-tac-toe/types";
import { getRandomElement } from "@/shared/helpers/array";

type WinnerCalculationFunction = (
  squares: Ref<Array<SquareValue>>
) => {
  computerMove: () => number;
};

export const useComputerMove: WinnerCalculationFunction = squares => {
  const freeSquareIndexes = computed(() =>
    squares.value
      .map((value, index) => ({ value, index }))
      .filter(item => item.value === null)
      .map(item => item.index)
  );

  return {
    computerMove() {
      return getRandomElement(freeSquareIndexes.value);
    }
  };
};

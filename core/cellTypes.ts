class Mine {}

class NumberOfMines {
  numberOfMines: number;
}

class Empty {}

type CellType = Mine | NumberOfMines | Empty;

export { Empty, Mine, NumberOfMines, CellType };

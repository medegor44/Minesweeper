class Mine {}

class NumberOfMines {
  numberOfMines: number;
  constructor(num: number) {
    this.numberOfMines = num;
  }
}

class Empty {}

type CellType = Mine | NumberOfMines | Empty;

export { Empty, Mine, NumberOfMines, CellType };

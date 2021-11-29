import { Empty, CellType, Mine, NumberOfMines } from './cellTypes';

const tranformFromFlatIndex = (
  flatIndex: number,
  width: number
): Array<number> => [Math.floor(flatIndex / width), flatIndex % width];

const genearateRandomPermutation = (length: number): Array<number> => {
  const permutation = [];

  for (let i = 0; i < length; i++) permutation.push(i);
  permutation.sort(() => Math.random() - 0.5);

  return permutation;
};

const generateEmptyField = (
  width: number,
  height: number
): Array<Array<Empty>> => {
  const field = Array<Array<Empty>>();
  for (let i = 0; i < height; i++) {
    const line = Array<Empty>();

    for (let j = 0; j < width; j++) line.push(new Empty());

    field.push(line);
  }

  return field;
};

const generateMines = (
  width: number,
  height: number,
  countOfMines: number
): Array<Array<CellType>> => {
  const field = generateEmptyField(width, height);
  const flatLength = width * height;
  const flatMinesIndecies = genearateRandomPermutation(flatLength);

  for (const flatMineIndex of flatMinesIndecies.slice(0, countOfMines)) {
    const [i, j] = tranformFromFlatIndex(flatMineIndex, width);
    field[i][j] = new Mine();
  }

  return field;
};

const getCountOfMines = (
  field: Array<Array<CellType>>,
  [i, j]: Array<number>
): number => {
  let count = 0;

  for (let dx = -1; dx <= 1; dx++)
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;

      const x = i + dx;
      const y = j + dy;

      if (
        0 <= x &&
        x < field.length &&
        0 <= y &&
        y < field[x].length &&
        field[x][y] instanceof Mine
      )
        count++;
    }

  return count;
};

const generateNubersNearMines = (
  field: Array<Array<CellType>>
): Array<Array<CellType>> => {
  const newField = new Array<Array<CellType>>();

  for (let i = 0; i < field.length; i++) {
    newField.push([]);
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] instanceof Mine) {
        newField[i].push(field[i][j]);
        continue;
      }

      const count = getCountOfMines(field, [i, j]);

      if (count) newField[i].push({ numberOfMines: count });
      else newField[i].push(new Empty());
    }
  }

  return newField;
};

export { generateMines, generateNubersNearMines };

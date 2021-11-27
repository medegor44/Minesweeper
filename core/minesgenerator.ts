import { Empty, CellType, Mine } from './cellTypes';

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

export default generateMines;

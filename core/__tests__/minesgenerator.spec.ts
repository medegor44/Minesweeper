import { generateMines, generateNubersNearMines } from '../minesgenerator';
import { Mine } from '../cellTypes';

it('should generate field with specified size', () => {
  const w = 3;
  const h = 4;

  const field = generateMines(w, h, 0);

  const actualCountOfMines = field
    .flat()
    .filter((x) => x instanceof Mine).length;

  expect(field.length).toBe(h);
  for (const line of field) expect(line.length).toBe(w);
});

it('should generate field with specified count of mines', () => {
  const w = 3;
  const h = 4;
  const countOfMines = 5;

  const field = generateMines(w, h, countOfMines);

  const actualCountOfMines = field
    .flat()
    .filter((x) => x instanceof Mine).length;

  expect(actualCountOfMines).toBe(countOfMines);
});

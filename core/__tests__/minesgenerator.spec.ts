import { generateMines, generateNubersNearMines } from '../minesgenerator';
import { Empty, Mine, NumberOfMines } from '../cellTypes';

it('should generate field with specified size', () => {
  const w = 3;
  const h = 4;

  const field = generateMines(w, h, 0);

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

it('shoud place right numbers near mines', () => {
  const fieldWithoutNumbers = [
    [new Empty(), new Empty(), new Empty()],
    [new Empty(), new Empty(), new Empty()],
    [new Mine(), new Mine(), new Empty()],
    [new Empty(), new Empty(), new Empty()],
    [new Empty(), new Empty(), new Empty()]
  ];

  const expected = [
    [new Empty(), new Empty(), new Empty()],
    [new NumberOfMines(2), new NumberOfMines(2), new NumberOfMines(1)],
    [new Mine(), new Mine(), new NumberOfMines(1)],
    [new NumberOfMines(2), new NumberOfMines(2), new NumberOfMines(1)],
    [new Empty(), new Empty(), new Empty()]
  ];

  const actual = generateNubersNearMines(fieldWithoutNumbers);

  expect(actual).toEqual(expected);
});

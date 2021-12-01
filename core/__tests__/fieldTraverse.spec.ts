import { Empty, Mine, NumberOfMines } from '../cellTypes';
import { openCell } from '../fieldTraverse';

it('should open hidden cells', () => {
  const field = [
    [new Empty(), new NumberOfMines(2), new Mine()],
    [new NumberOfMines(2), new NumberOfMines(5), new Mine()],
    [new Mine(), new Mine(), new NumberOfMines(1)],
    [new NumberOfMines(2), new NumberOfMines(2), new NumberOfMines(1)],
    [new Empty(), new Empty(), new Empty()]
  ];

  const openedCells = [
    [true, true, false],
    [true, true, false],
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];

  const expected = [
    [true, true, false],
    [true, true, false],
    [false, false, true],
    [true, true, true],
    [true, true, true]
  ];

  const actual = openCell(field, openedCells, [3, 0]);

  expect(actual).toEqual(expected);
});

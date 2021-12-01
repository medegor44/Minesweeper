import { CellType, Mine } from './cellTypes';

const openCell = (
  field: Array<Array<CellType>>,
  openedCells: Array<Array<boolean>>,
  [i, j]: Array<number>
): Array<Array<boolean>> => {
  const visited = [];

  for (let i = 0; i < field.length; i++) {
    visited.push([]);
    for (let j = 0; j < field[i].length; j++) visited[i].push(false);
  }

  const dfs = ([i, j]) => {
    if (visited[i][j]) return;

    visited[i][j] = true;
    for (let dx = -1; dx <= 1; dx++)
      for (let dy = -1; dy <= 1; dy++) {
        if (Math.abs(dx) + Math.abs(dy) != 1) continue;

        const x = i + dx;
        const y = j + dy;

        if (
          0 <= x &&
          x < visited.length &&
          0 <= y &&
          y < visited[x].length &&
          !(field[x][y] instanceof Mine)
        )
          dfs([x, y]);
      }
  };

  dfs([i, j]);

  for (let i = 0; i < openedCells.length; i++)
    for (let j = 0; j < openedCells[i].length; j++)
      visited[i][j] = visited[i][j] || openedCells[i][j];

  return visited;
};

export { openCell };

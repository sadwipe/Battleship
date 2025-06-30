export default function getCellsForPreview(
  x,
  y,
  length,
  orientation,
  gameboard,
) {
  const buildBoard = document.querySelector('.build.board');

  const selectedCells = [];
  x = Number(x);
  y = Number(y);

  for (let i = 0; i < length; i++) {
    const cx = orientation === 'v' ? x + i : x;
    const cy = orientation === 'h' ? y + i : y;

    const cell = buildBoard.querySelector(`[data-x="${cx}"][data-y="${cy}"]`);

    if (!cell) {
      return null;
    }

    if (cell.classList.contains('placed')) {
      return null;
    }

    if (gameboard.isOccupied(cx, cy)) {
      return null;
    }

    selectedCells.push(cell);
  }

  return selectedCells;
}

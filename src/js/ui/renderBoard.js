export default function renderBoard(boardElement, gameboard, isComputer) {
  boardElement.innerHTML = '';

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = i;
      cell.dataset.y = j;

      const value = gameboard.board[i][j];

      if (value === 1) {
        cell.classList.add('hit');
      } else if (value === 2) {
        cell.classList.add('miss');
      } else if (typeof value === 'object' && !isComputer) {
        cell.classList.add('placed');
      }

      boardElement.appendChild(cell);
    }
  }
}

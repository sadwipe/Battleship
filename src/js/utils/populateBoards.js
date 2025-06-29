export default function populateBoards() {
  const boards = document.querySelectorAll('.board');

  boards.forEach((board) => {
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }
  });
}

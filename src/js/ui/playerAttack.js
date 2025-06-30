export default function playerAttack(board, gameboard) {
  return new Promise((resolve) => {
    const cells = board.querySelectorAll('.cell');

    function onClickHandler(event) {
      cells.forEach((cell) =>
        cell.removeEventListener('click', onClickHandler),
      );
      gameboard.receiveAttack([
        event.currentTarget.dataset.x,
        event.currentTarget.dataset.y,
      ]);
      // event.currentTarget.dataset.x
      // event.currentTarget.dataset.y
      resolve();
    }

    cells.forEach((cell) => {
      cell.addEventListener('click', onClickHandler);
    });
  });
}

import getCellsForPreview from '../utils/getCellsForPreview';
import Ship from '../models/factories/Ship';

export default function chooseCarrier(gameboard, boardElement) {
  return new Promise((resolve) => {
    const cells = boardElement.querySelectorAll('.cell');
    const rotateButton = document.querySelector('.rotate');

    const shipLengths = [5, 4, 3, 3, 2];
    let orientation = 'v';
    let currentShipIndex = 0;

    rotateButton.addEventListener('click', () => {
      orientation = orientation === 'v' ? 'h' : 'v';
    });

    cells.forEach((cell) => {
      cell.addEventListener('mouseover', () => {
        if (currentShipIndex >= shipLengths.length) {
          return;
        }

        const xPosition = cell.dataset.x;
        const yPosition = cell.dataset.y;
        const length = shipLengths[currentShipIndex];
        const previewCells = getCellsForPreview(
          xPosition,
          yPosition,
          length,
          orientation,
          gameboard,
        );

        if (previewCells) {
          previewCells.forEach((c) => c.classList.add('preview'));
        }
      });

      cell.addEventListener('mouseout', () => {
        boardElement
          .querySelectorAll('.cell.preview')
          .forEach((c) => c.classList.remove('preview'));
      });

      cell.addEventListener('click', () => {
        if (currentShipIndex >= shipLengths.length) {
          return;
        }

        const xPosition = parseInt(cell.dataset.x, 10);
        const yPosition = parseInt(cell.dataset.y, 10);
        const length = shipLengths[currentShipIndex];
        const targetCells = getCellsForPreview(
          xPosition,
          yPosition,
          length,
          orientation,
          gameboard,
        );

        if (!targetCells) {
          return;
        }

        gameboard.placeShip(
          new Ship(length),
          [xPosition, yPosition],
          orientation,
        );
        targetCells.forEach((c) => {
          c.classList.remove('preview');
          c.classList.add('placed');
        });

        currentShipIndex++;

        if (currentShipIndex === shipLengths.length) {
          resolve();
        }
      });
    });
  });
}

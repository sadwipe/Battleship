import Ship from '../models/factories/Ship';
import getRandomCoordinates from './getRandomCoordinates';

function getRandomOrientation() {
  return Math.random() > 0.5 ? 'h' : 'v';
}

export default function populateComputerBoard(gameboard) {
  const shipLengths = [5, 4, 3, 3, 2];

  for (
    let currentShipIndex = 0;
    currentShipIndex < shipLengths.length;
    currentShipIndex++
  ) {
    const length = shipLengths[currentShipIndex];
    const ship = new Ship(length);

    let placed = false;
    while (!placed) {
      const randomPosition = getRandomOrientation();
      const randomCoordinates = getRandomCoordinates();

      try {
        placed = gameboard.placeShip(ship, randomCoordinates, randomPosition);
      } catch (error) {
        // Position invalid or max ships reached — just ignore and try again
        placed = false;
      }
    }
  }
}

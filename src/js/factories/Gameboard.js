const SIZE = 10;

export default class Gameboard {
  /*
  0 -> empty space on board
  { object } -> ship
  1 -> hit ship
  2 -> missed shot
  */
  constructor() {
    this.board = Array.from({ length: SIZE }, () => new Array(SIZE).fill(0));
    this.numberOfShips = 0;
    this.addedShips = [];
  }

  // Verifies if the coordinates are out of bounds
  isOutOfBounds(x, y) {
    return x < 0 || x > 9 || y < 0 || y > 9;
  }

  // Verifies if the coordinates are occupied (ships, misses)
  isOccupied(x, y) {
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const newX = x + dx;
        const newY = y + dy;

        if (!this.isOutOfBounds(newX, newY)) {
          if (this.board[newX][newY] !== 0) {
            return true; // Occupied or adjacent to a ship
          }
        }
      }
    }
    return false;
  }

  // Verifies if we can place the ship on coordinates
  checkPosition(length, x, y, orientation) {
    const xMax = orientation === 'h' ? x : x + length - 1;
    const yMax = orientation === 'h' ? y + length - 1 : y;

    if (this.isOutOfBounds(x, y) || this.isOutOfBounds(xMax, yMax)) {
      return false;
    }

    for (let i = 0; i < length; i++) {
      const currentX = orientation === 'h' ? x : x + i;
      const currentY = orientation === 'h' ? y + i : y;

      if (this.isOccupied(currentX, currentY)) {
        return false;
      }
    }
    return true;
  }

  // Place ships on board
  placeShip(ship, coordinates, orientation) {
    if (this.numberOfShips >= 5) {
      throw new Error('The number of ships is maximum. (5)');
    }

    const { length } = ship;
    const [x, y] = coordinates;

    if (!this.checkPosition(length, x, y, orientation)) {
      throw new Error('Invalid position.');
    }

    for (let i = 0; i < length; i++) {
      const currentX = orientation === 'h' ? x : x + i;
      const currentY = orientation === 'h' ? y + i : y;

      this.board[currentX][currentY] = ship;
    }

    this.addedShips.push(ship);
    this.numberOfShips++;
    return true;
  }

  receiveAttack(coordinates) {
    const [x, y] = coordinates;

    if (this.isOutOfBounds(x, y)) {
      throw new Error('Invalid position');
    }

    // Miss
    if (this.board[x][y] === 0) {
      this.board[x][y] = 2;
      return {
        hit: false,
      };
    }

    // Hit
    const ship = this.board[x][y];
    ship.hit();
    this.board[x][y] = 1;
    if (ship.isSunk()) {
      this.numberOfShips--;
    }
    return {
      hit: true,
    };
  }
}

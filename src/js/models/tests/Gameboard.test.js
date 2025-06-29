import Gameboard from '../factories/Gameboard';
import Ship from '../factories/Ship';

describe('Gameboard', () => {
  let board;

  beforeEach(() => {
    board = new Gameboard();
  });

  test('constructor initializes a 10x10 board with empty cells', () => {
    expect(board.board.length).toBe(10);
    expect(board.board[0].length).toBe(10);
    expect(board.numberOfShips).toBe(0);
    expect(board.addedShips).toEqual([]);
  });

  test('placeShip correctly places a ship horizontally', () => {
    const ship = new Ship(3);
    board.placeShip(ship, [0, 0], 'h');

    expect(board.board[0][0]).toBe(ship);
    expect(board.board[0][1]).toBe(ship);
    expect(board.board[0][2]).toBe(ship);
    expect(board.numberOfShips).toBe(1);
    expect(board.addedShips).toContain(ship);
  });

  test('placeShip correctly places a ship vertically', () => {
    const ship = new Ship(2);
    board.placeShip(ship, [1, 1], 'v');

    expect(board.board[1][1]).toBe(ship);
    expect(board.board[2][1]).toBe(ship);
  });

  test('placeShip throws on invalid overlapping position', () => {
    const ship1 = new Ship(2);
    const ship2 = new Ship(2);
    board.placeShip(ship1, [0, 0], 'h');
    expect(() => board.placeShip(ship2, [0, 1], 'v')).toThrow(
      'Invalid position.',
    );
  });

  test('placeShip throws if number of ships exceeds limit', () => {
    // Place 5 ships with length 2 and space between them vertically to avoid adjacency
    board.placeShip(new Ship(2), [0, 0], 'v'); // occupies [0,0],[1,0]
    board.placeShip(new Ship(2), [0, 2], 'v'); // occupies [0,2],[1,2]
    board.placeShip(new Ship(2), [0, 4], 'v');
    board.placeShip(new Ship(2), [0, 6], 'v');
    board.placeShip(new Ship(2), [0, 8], 'v');

    // Now placing 6th ship should throw
    expect(() => board.placeShip(new Ship(2), [2, 0], 'v')).toThrow(
      'The number of ships is maximum. (5)',
    );
  });

  test('receiveAttack marks a miss and returns hit: false', () => {
    const result = board.receiveAttack([0, 0]);

    expect(board.board[0][0]).toBe(2); // Miss marker
    expect(result).toEqual({ hit: false });
  });

  test('receiveAttack hits a ship and updates board', () => {
    const ship = new Ship(2);
    board.placeShip(ship, [2, 2], 'h');

    const result = board.receiveAttack([2, 2]);
    const result2 = board.receiveAttack([2, 3]);

    expect(result).toEqual({ hit: true });
    expect(result2).toEqual({ hit: true });

    expect(board.board[2][2]).toBe(1);
    expect(board.board[2][3]).toBe(1);

    expect(ship.timesHit).toBe(2);
    expect(ship.isSunk()).toBe(true);
    expect(board.numberOfShips).toBe(0);
  });

  test('receiveAttack throws on out-of-bounds attack', () => {
    expect(() => board.receiveAttack([-1, 0])).toThrow('Invalid position');
    expect(() => board.receiveAttack([10, 5])).toThrow('Invalid position');
  });
});

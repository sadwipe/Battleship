import Player from '../factories/Player';
import Gameboard from '../factories/Gameboard';

describe('Player', () => {
  test('should create a human player by default', () => {
    const player = new Player();
    expect(player).toBeDefined();
    expect(player.type).toBe(false); // human
    expect(player.gameboard).toBeInstanceOf(Gameboard);
  });

  test('should create a computer player if flag is true', () => {
    const computer = new Player(true);
    expect(computer.type).toBe(true);
    expect(computer.gameboard).toBeInstanceOf(Gameboard);
  });

  test('should have a fresh gameboard with empty cells', () => {
    const player = new Player();
    for (let row of player.gameboard.board) {
      for (let cell of row) {
        expect(cell).toBe(0);
      }
    }
  });
});

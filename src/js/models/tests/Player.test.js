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
    for (let i = 0; i < player.gameboard.board.length; i++) {
      for (let j = 0; j < player.gameboard.board.length; j++) {
        expect(player.gameboard.board[i][j]).toBe(0);
      }
    }
  });
});

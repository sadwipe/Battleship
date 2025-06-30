import renderBoard from './ui/renderBoard';
import chooseCarrier from './ui/chooseCarrier';
import removeModal from './ui/removeModal';
import populateComputerBoard from './utils/populateComputerBoard';
import Player from './models/factories/Player';
import gameIsOver from './utils/gameIsOver';
import playerAttack from './ui/playerAttack';
import computerAttack from './ui/computerAttack';

export default async function init() {
  const player = new Player();
  const computer = new Player(true);
  let currentPlayer = player;

  const playerBoardBuilderElement = document.querySelector('.board.build');
  const playerBoardElement = document.querySelector('.board.player');
  const computerBoardElement = document.querySelector('.board.computer');

  // Initial board setup for placing boats.
  renderBoard(playerBoardBuilderElement, player.gameboard, player.type);

  // Place the ships
  await chooseCarrier(player.gameboard, playerBoardBuilderElement);

  // Render the player board with chosen ships
  renderBoard(playerBoardElement, player.gameboard, player.type);

  // Populate with random values
  populateComputerBoard(computer.gameboard);

  // Render computer's board (hiding the ships)
  renderBoard(computerBoardElement, computer.gameboard, computer.type);

  // Remove modal
  removeModal();

  /* eslint-disable no-await-in-loop */
  while (!gameIsOver(player, computer)) {
    if (currentPlayer === player) {
      await playerAttack(computerBoardElement, computer.gameboard);
      renderBoard(computerBoardElement, computer.gameboard, computer.type);
    } else {
      await computerAttack(playerBoardBuilderElement, player.gameboard);
      renderBoard(playerBoardElement, player.gameboard, player.type);
    }
    currentPlayer = currentPlayer === player ? computer : player;
  }
  console.log('Game finish');
  /* eslint-enable no-await-in-loop */
}

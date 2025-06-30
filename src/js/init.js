import Gameboard from './models/factories/Gameboard';
import renderBoard from './utils/renderBoard';
import chooseCarrier from './ui/chooseCarrier';
import removeModal from './ui/removeModal';

export default function init() {
  const playerBoard = new Gameboard();
  const computerBoard = new Gameboard();

  const playerBoardBuilderElement = document.querySelector('.board.build');
  const playerBoardElement = document.querySelector('.board.player');
  const computerBoardElement = document.querySelector('.board.computer');

  renderBoard(playerBoardBuilderElement, playerBoard);

  chooseCarrier(playerBoard, playerBoardBuilderElement, () => {
    renderBoard(playerBoardElement, playerBoard);
    renderBoard(computerBoardElement, computerBoard);
    removeModal();
  });
}

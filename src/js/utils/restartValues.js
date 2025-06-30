export default function restartValues() {
  const buildBoard = document.querySelector('.board.build');
  const playerBoard = document.querySelector('.board.player');
  const computerBoard = document.querySelector('.board.computer');
  
  document.querySelectorAll('.modal').forEach(modal => modal.remove());

  if(buildBoard) {
    buildBoard.innerHTML = "";
  }

  if(playerBoard) {
    playerBoard.innerHTML = "";
  }

  if(computerBoard) {
    computerBoard.innerHTML = "";
  }
}

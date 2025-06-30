export default function gameIsOver(player, computer) {
  return (
    player.gameboard.numberOfShips === 0 ||
    computer.gameboard.numberOfShips === 0
  );
}

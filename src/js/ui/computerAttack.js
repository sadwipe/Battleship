import getRandomCoordinates from '../utils/getRandomCoordinates';

export default async function computerAttack(board, gameboard) {
  return new Promise((resolve) => {
    let isHit = false;
    while (!isHit) {
      const coordinates = getRandomCoordinates();
      isHit = gameboard.receiveAttack(coordinates).hit;
    }
    resolve();
  });
}

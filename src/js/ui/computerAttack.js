import getRandomCoordinates from '../utils/getRandomCoordinates';

export default async function computerAttack(board, gameboard) {
  return new Promise((resolve) => {
    let isHit = false;
    while (!isHit) {
      const coordinates = getRandomCoordinates();
      console.log(coordinates);
      isHit = gameboard.receiveAttack(coordinates).hit;
    }
    resolve();
  });
}

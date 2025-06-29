import Gameboard from './Gameboard';

export default function Player(isComputer = false) {
  this.gameboard = new Gameboard();
  this.type = isComputer;
}

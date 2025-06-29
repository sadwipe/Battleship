export default class Ship {
  constructor(length) {
    if (!Number.isInteger(length) || length <= 0 || length > 5) {
      throw new Error('Length must be an integer between 1 and 5.');
    }
    this.length = length;
    this.timesHit = 0;
  }

  hit() {
    if (this.isSunk()) {
      return false;
    }
    this.timesHit++;
    return true;
  }

  isSunk() {
    return this.timesHit >= this.length;
  }
}

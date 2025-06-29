import Ship from '../Ship';

describe('ship constructor validation', () => {
  test('throws an error if length is 0', () => {
    expect(() => new Ship(0)).toThrow(
      'Length must be an integer between 1 and 5.',
    );
  });

  test('throws an error if length is negative', () => {
    expect(() => new Ship(-1)).toThrow(
      'Length must be an integer between 1 and 5.',
    );
  });

  test('throws an error if length is greater than 5.', () => {
    expect(() => new Ship(6)).toThrow(
      'Length must be an integer between 1 and 5.',
    );
  });

  test("throws an error if we don't initialize using a number", () => {
    expect(() => new Ship('3')).toThrow(
      'Length must be an integer between 1 and 5.',
    );
  });

  test('works fine with 1-5', () => {
    expect(() => new Ship(1)).not.toThrow();
    expect(() => new Ship(2)).not.toThrow();
    expect(() => new Ship(3)).not.toThrow();
    expect(() => new Ship(4)).not.toThrow();
    expect(() => new Ship(5)).not.toThrow();
  });
});

describe('ship hit', () => {
  test('tracks number of times hit correctly', () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.timesHit).toBe(1);
    ship.hit();
    expect(ship.timesHit).toBe(2);
  });

  test('does not increment timesHit after ship is sunk', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.timesHit).toBe(2);
  });

  test('hit returns true if ship is not sunk', () => {
    const ship = new Ship(2);
    expect(ship.hit()).toBe(true);
  });

  test('hit returns false if ship is sunk', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.hit()).toBe(false);
  });
});

describe('is sunk', () => {
  test('returns false for new ship', () => {
    expect(new Ship(2).isSunk()).toBe(false);
  });

  test('returns false when not fully hit', () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test('returns true when fully hit', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});

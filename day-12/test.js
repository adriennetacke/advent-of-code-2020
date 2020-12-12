const assert = require('assert');
const one = require('./one');
const two = require('./two');

describe('Day 12 - Part One', () => {
  it('should return 25 as Manhattan Distance', () => {
    let input = `F10
N3
F7
R90
F11`;
    assert.strictEqual(one(input), 25);
  });
});

describe('Day 12 - Part Two', () => {
  it('should return 286 as modified Manhattan Distance', () => {
    let input = `F10
N3
F7
R90
F11`;
    assert.strictEqual(two(input), 286);
  });
});
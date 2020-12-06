const assert = require('assert');
const one = require('./one');
const two = require('./two');

describe('Part One', () => {
  it('should return 11 as distinct anyone questions answered', () => {
    let input = `abc

a
b
c

ab
ac

a
a
a
a

b`;
    assert.strictEqual(one(input), 11);
  });
});

describe('Part Two', () => {
  it('should return 6 as distinct questions everyone answered', () => {
    let input = `abc

a
b
c

ab
ac

a
a
a
a

b`;
    assert.strictEqual(two(input), 6);
  });
});
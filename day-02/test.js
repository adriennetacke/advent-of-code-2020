const assert = require('assert');
const one = require('./one');
const two = require('./two');

describe('Part One', () => {
  it('should return 2 valid passwords', () => {
    let input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;
    assert.strictEqual(one(input), 2);
  });
});

describe('Part Two', () => {
  it('should return 1 valid password', () => {
    let input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;
    assert.strictEqual(two(input), 1);
  });
});
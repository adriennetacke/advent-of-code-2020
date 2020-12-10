const assert = require('assert');
const one = require('./one');

describe('Part One', () => {
  it('should return 820 as highest seat ID', () => {
    let input = `FBFBBFFRLR
    BFFFBBFRRR
    FFFBBBFRRR
    BBFFBBFRLL`;
    assert.strictEqual(one(input), 820);
  });
});
const assert = require('assert');
const one = require('./one');
const two = require('./two');

describe('Part One', () => {
  it('should return 127 as first invalid number', () => {
    let input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;
    assert.strictEqual(one(input, 5), 127);
  });
});

describe('Part Two', () => {
  it('should return 62 as encryption weakness', () => {
    let input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;
    assert.strictEqual(two(input, 5), 62);
  });
});
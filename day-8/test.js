const assert = require('assert');
const one = require('./one');
const two = require('./two');

describe('Part One', () => {
  it('should return 5 as accumulator', () => {
    let input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;
    assert.strictEqual(one(input), 5);
  });
});

describe('Part Two', () => {
  it('should return 8 as accumulator', () => {
    let input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
nop -4
acc +6`;
    assert.strictEqual(two(input), 8);
  });
});
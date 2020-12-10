const assert = require('assert');
const one = require('./one');
const two = require('./two');

describe('Part One', () => {
  it('should return 7 trees encountered', () => {
    let input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
    assert.strictEqual(one(input, 3, 1), 7);
  });
});

describe('Part Two', () => {
  it('should return 336 as product of found trees', () => {
    let input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
    assert.strictEqual(two(input, [1, 3, 5, 7, 1], [1, 1, 1, 1, 2]), 336);
  });
});
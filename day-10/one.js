const one = (input) => {
  const numbers = input
    .split('\n')
    .map(x => parseInt(x))
    .sort((a, b) => a - b);

  let last = 0;
  let countOfOneJolts = 0;
  let countOfThreeJolts = 0;

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    
    if (current - last === 1) {
      countOfOneJolts++;
    }

    if (current - last === 3) {
      countOfThreeJolts++;
    }

    // Last adapter -> highest adapter
    // Always 3 higher
    if (i === numbers.length - 1) {
      countOfThreeJolts++;
    }

    last = numbers[i];
  }

  return countOfOneJolts * countOfThreeJolts;
}

module.exports = one;




















// @adriennetacke
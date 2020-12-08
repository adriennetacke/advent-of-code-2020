const one = (input) => {
  const instructions = input.split('\n');

  let accumulator = 0;
  let currentIndex = 0;
  let stepsVisited = [];

  while (!stepsVisited.includes(currentIndex)) {
    stepsVisited.push(currentIndex);

    const [, operation, units] = /(acc|jmp|nop)\s([+-]\d*)/.exec(instructions[currentIndex]);

    switch (operation) {
      case 'acc':
        accumulator += parseInt(units);
        currentIndex++;

        break;

      case 'jmp':
        currentIndex += parseInt(units);

        break;

      default:
        currentIndex++;
        break;
    }
  }

  return accumulator;
}

module.exports = one;














// @adriennetacke
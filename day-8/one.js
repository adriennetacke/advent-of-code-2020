const one = (input) => {
  const instructions = input.split('\n');

  let notAnInfiniteLoop = true;
  let accumulator = 0;
  let currentIndex = 0;
  let stepsVisited = [];

  while (notAnInfiniteLoop) {
    const [, operation, direction, units] = /(acc|jmp|nop)\s(\+|-)(\d*)/.exec(instructions[currentIndex]);

    switch (operation) {
      case 'acc':
        if (direction === '+') accumulator += parseInt(units);
        if (direction === '-') accumulator -= parseInt(units);
        currentIndex++;

        break;

      case 'jmp':
        if (direction === '+') currentIndex += parseInt(units);
        if (direction === '-') currentIndex -= parseInt(units);

        break;

      default:
        currentIndex++;
        break;
    }

    if (stepsVisited.includes(currentIndex)) {
      notAnInfiniteLoop = false;
    } else {
      stepsVisited.push(currentIndex);
    }
  }

  return accumulator;
}

module.exports = one;














// @adriennetacke
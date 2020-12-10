const one = require('./one');

const two = (input, preambleLength) => {
  const invalidNumber = one(input, preambleLength);
  const numbers = input.split('\n').map(x => parseInt(x));
  const maxRange = numbers.slice(0, numbers.indexOf(invalidNumber) + 1);
  
  let runningTotal = 0;
  let range = [];

  for (let i = 0; i < maxRange.length; i++) {
    const start = maxRange[i];

    runningTotal += start;
    range.push(start);
    
    for (let j = i + 1; j < maxRange.length; j++) {
      const next = maxRange[j];

      runningTotal += next;
      range.push(next);

      if (runningTotal > invalidNumber) {
        runningTotal = 0;
        range = [];

        break;
      }

      if (runningTotal === invalidNumber) {
        const sorted = range.sort((a, b) => a - b);

        return sorted[0] + sorted.slice(-1)[0];
      };
    }
  }
}

module.exports = two;











// @adriennetacke
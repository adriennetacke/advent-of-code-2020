const one = (input) => {
  let numbers = input
    .split('\n')
    .map(x => parseInt(x));
  
    for (let i = 0; i <= numbers.length; i++) {
      let partOneOf2020 = 2020 - numbers[i];
      let partTwoOf2020 = numbers.filter(x => x == partOneOf2020);

      if (numbers.filter(x => x == partOneOf2020).length == 1) {
        return numbers[i] * partTwoOf2020;
      }
    }
}

module.exports = one;
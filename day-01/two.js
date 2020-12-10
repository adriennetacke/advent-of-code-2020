const two = (input) => {
  let numbers = input
    .split('\n')
    .map(x => parseInt(x));

  for (let i = 0; i < numbers.length; i++) {
    let first = numbers[i];

    for (let j = 0; j < numbers.length; j++) {
      const second = numbers[j];

      for (let k = 0; k < numbers.length; k++) {
        const third = numbers[k];

        if ((first + second + third) === 2020) {
          return first * second * third;
        }
      }
    }
  }
}

module.exports = two;
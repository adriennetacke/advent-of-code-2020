const one = require('./one');

const two = (input, xCoordinates, yCoordinates) => {
  let numberOfTrees = [0, 0, 0, 0, 0];

  for (let i = 0; i < xCoordinates.length; i++) {
    let totalTrees = one(input, xCoordinates[i], yCoordinates[i]);

    numberOfTrees[i] = totalTrees;
  }

  return numberOfTrees.reduce((a, b) => a * b, 1);
}

module.exports = two;



















// @adriennetacke
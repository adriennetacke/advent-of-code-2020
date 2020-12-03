const one = (input, xUnits, yUnits) => {
  let treeMap = input
    .split('\n')
    .map(x => x.split(''));

  let numberOfTrees = 0
  let x = 0;
  let y = 0;
  
  while (y < treeMap.length) {
    const adjustedX = x % treeMap[0].length;
    const coordinate = treeMap[y][adjustedX];

    if (coordinate === `#`) { 
      numberOfTrees++;
    }

    x += xUnits;
    y += yUnits;
  }

  return numberOfTrees;
}

module.exports = one;














// @adriennetacke
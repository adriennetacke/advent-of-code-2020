const directions = {
  0: 'N',
  90: 'E',
  180: 'S',
  270: 'W',
};

Object.freeze(directions);

const degrees = {
  N: 0,
  E: 90,
  S: 180,
  W: 270
};

Object.freeze(degrees);

const one = (input) => {
  let xAxisUnits = 0;
  let yAxisUnits = 0;
  let directionFacing = degrees['E'];
  
  return input.split('\n')
  .map(x => x.trim())
  .reduce((distance, currentNavigation) => {
    const [, direction, rawUnits] = /(N|S|F|E|W|R|L)(\d*)/.exec(currentNavigation);

    let units = parseInt(rawUnits);

    switch (direction) {
      case 'N':
        yAxisUnits += units;
        break;

      case 'S':
        yAxisUnits -= units;
        break;

      case 'E':
        xAxisUnits += units;
        break;

      case 'W':
        xAxisUnits -= units;
        break;
    
      default:
        break;
    }

    if (directionFacing === degrees['E'] || directionFacing === degrees['W']) {
      switch (direction) {
        case 'F':
          directionFacing === degrees['E']
          ? xAxisUnits += units
          : xAxisUnits -= units;
          break;

        default:
          break;
      }
    }

    // Invert where units are added when facing North/South
    if (directionFacing === degrees['N'] || directionFacing === degrees['S']) {
      switch (direction) {
        case 'F':
          directionFacing === degrees['N'] 
          ? yAxisUnits += units
          : yAxisUnits -= units;
          break;
        
        default:
          break;
      }
    }

    if (direction === 'L') {
      let adjustedDegrees = directionFacing - units;

      switch (adjustedDegrees) {
        case -90:
            directionFacing = degrees[directions[270]];
          break;

        case -180:
            directionFacing = degrees[directions[180]];
          break;

        case -270:
            directionFacing = degrees[directions[90]];
          break;
        
        default:
          directionFacing = degrees[directions[directionFacing - units]];
          break;
      }
    }

    if (direction === 'R') {
      let adjustedDegrees = directionFacing + units;

      switch (adjustedDegrees) {
        case 360:
          directionFacing = degrees[directions[0]];
          break;

        case 450:
          directionFacing = degrees[directions[90]];
          break;

        case 540:
          directionFacing = degrees[directions[180]];
          break;

        default:
          directionFacing = degrees[directions[directionFacing + units]];
          break;
      }
      
    }

    return Math.abs(xAxisUnits) + Math.abs(yAxisUnits);
    
  }, 0);

}

module.exports = one;







// @adriennetacke
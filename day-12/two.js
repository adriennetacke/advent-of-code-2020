const two = (input) => {
  let xAxisUnits = 0;
  let yAxisUnits = 0;

  let xWaypoint = 10;
  let yWaypoint = 1;

  const actions = input.split('\n').map(x => x.trim());

  for (let i = 0; i < actions.length; i++) {
    const [, direction, rawUnits] = /(N|S|F|E|W|R|L)(\d*)/.exec(actions[i]);

    let units = parseInt(rawUnits);

    switch (direction) {
      case 'N':
        yWaypoint += units;
        break;

      case 'S':
        yWaypoint -= units;
        break;

      case 'E':
        xWaypoint += units;
        break;

      case 'W':
        xWaypoint -= units;
        break;
      
      case 'F':
        xAxisUnits += (units * xWaypoint);
        yAxisUnits += (units * yWaypoint);
        break;

      case 'L': {
        for (let j = 0; j < units; j += 90) {
          const currentXWaypoint = xWaypoint;
          const currentYWaypoint = yWaypoint;
          yWaypoint = currentXWaypoint;
          xWaypoint = -currentYWaypoint;

        }
      }
        break;

      case 'R': {
        for (let j = 0; j < units; j += 90) {
          const currentXWaypoint = xWaypoint;
          const currentYWaypoint = yWaypoint;
          yWaypoint = -currentXWaypoint;
          xWaypoint = currentYWaypoint;
        }
      }
        break;

      default:
        break;
    } 
  }
  return Math.abs(xAxisUnits) + Math.abs(yAxisUnits);
}

module.exports = two;











// @adriennetacke
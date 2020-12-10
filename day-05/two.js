const two = (input) => {
  let passes = input.split('\n')
    .map(x => {
      const pass = x.trim().split('');

      let lowerRowBound = 0;
      let upperRowBound = 127;
      let lowerColumnBound = 0;
      let upperColumnBound = 7;

      let finalRow = 0;
      let finalColumn = 0;

      pass.forEach(char => {
        const totalRowsLeft = upperRowBound - lowerRowBound;
        const totalColumnsLeft = upperColumnBound - lowerColumnBound; 1

        const rowHalf = totalRowsLeft / 2;
        const columnHalf = totalColumnsLeft / 2; .5

        switch (char) {
          case 'F':
            if (totalRowsLeft === 1) finalRow = lowerRowBound;

            upperRowBound = Math.floor(upperRowBound - rowHalf);

            break;
          case 'B':
            if (totalRowsLeft === 1) finalRow = upperRowBound;

            lowerRowBound = Math.ceil(upperRowBound - rowHalf);

            break;
          case 'L':
            if (totalColumnsLeft === 1) finalColumn = lowerColumnBound;

            upperColumnBound = Math.floor(upperColumnBound - columnHalf);

            break;
          case 'R':
            if (totalColumnsLeft === 1) finalColumn = upperColumnBound;

            lowerColumnBound = Math.ceil(upperColumnBound - columnHalf);

            break;

          default:
            break;
        }
      });

      return [finalRow, finalColumn]
    })
    .map(x => {
      return (x[0] * 8) + x[1];
    })
    .sort((a, b) => a - b);


   for (let i = 0; i < passes.length; i++) {
    const currentSeat = passes[i];

    if (passes[i + 1] === currentSeat + 2) return currentSeat + 1;
     
   }
}

module.exports = two;














// @adriennetacke
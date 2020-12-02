const two = (input) => {
  return input
    .split('\n')
    .reduce((validPasswords, currentPassword) => {
      const pattern = /(\d?\d)\-(\d?\d)\s([a-z])\:\s([a-z]*)/gm;
      const matchGroups = pattern.exec(currentPassword);

      const positionOne = parseInt(matchGroups[1]);
      const positionTwo = parseInt(matchGroups[2]);
      const charToFind = matchGroups[3];
      const password = matchGroups[4];

      const isAtPositionOne = password[positionOne - 1] === charToFind; 
      const isAtPositionTwo = password[positionTwo - 1] === charToFind; 

      if (isAtPositionOne + isAtPositionTwo === 1) {
        return validPasswords + 1;
      }

      return validPasswords;

    }, 0);
}

module.exports = two;



















// @adriennetacke
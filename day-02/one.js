const one = (input) => {
  return input
    .split('\n')
    .reduce((validPasswords, currentPassword) => {
      const pattern = /(\d?\d)\-(\d?\d)\s([a-z])\:\s([a-z]*)/gm;
      const matchGroups = pattern.exec(currentPassword);

      const lowerBound = parseInt(matchGroups[1]);
      const upperBound = parseInt(matchGroups[2]);
      const charToFind = matchGroups[3];
      const password = matchGroups[4].split('');
      
      const charMatches = password.filter(x => x == charToFind).length;
      
      if (charMatches >= lowerBound && charMatches <= upperBound) {
        return validPasswords + 1;
      }
    
      return validPasswords;

    }, 0);
  
}

module.exports = one;














// @adriennetacke
const one = (input) => {
  let passports = input.split('\n');
  let sortedPassports = [];
  let temp = [];

  // Sort codes into single passports
  for (let i = 0; i < passports.length; i++) {
    if (passports[i] !== '') {
      temp.push(passports[i]);
    } 

    if (i === passports.length - 1 || passports[i] == '') {
      sortedPassports.push(temp);
      temp = [];
    }
  }

  const codes = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'];

  return sortedPassports
    .map(passport => {
      let combinedInfo = '';

      passport.map(info => {
        combinedInfo += info;
      });

      return combinedInfo;
    })
    .map(consolidatedPassport => {
      let verifiedCodes = [];
      
      codes.map(code => {
        if (consolidatedPassport.includes(code)) {
          verifiedCodes.push(code);
        }
      });

      // All codes present
      if (verifiedCodes.length > 7) return 1;

      // Check that none of minimum number of required codes is 'cid'
      if (verifiedCodes.length == 7 && !verifiedCodes.includes('cid')) {
        return 1;
      }
    })
    .reduce((validPassports, currentPassport) => {
      const anotherOne = isNaN(currentPassport) ? 0 : currentPassport;
      return validPassports + anotherOne;
    }, 0);
}

module.exports = one;














// @adriennetacke
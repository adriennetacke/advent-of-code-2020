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

  const codes = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  return sortedPassports
    .reduce((validPassports, currentPassport) => {
      const consolidatedPassport = currentPassport.join(' ');

      let verifiedCodes = [];

      codes.forEach(code => {
        if (consolidatedPassport.includes(code)) {
          verifiedCodes.push(code);
        }
      });

      // All required codes present
      if (verifiedCodes.length == 7) return validPassports + 1;

      return validPassports;

    }, 0);
}

module.exports = one;














// @adriennetacke
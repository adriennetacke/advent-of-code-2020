const two = (input) => {
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
      let validatedCodes = [];

      // First check all required codes are present
      codes.forEach(code => {
        if (consolidatedPassport.includes(code)) {
          verifiedCodes.push(code);
        }
      });

      const isVerified = codes.every(x => verifiedCodes.includes(x));

      if (!isVerified) return validPassports;

      // Find codes and their values
      const [, , byr] = /(byr):(\d{4})/.exec(consolidatedPassport);
      const [, , iyr] = /(iyr):(\d{4})/.exec(consolidatedPassport);
      const [, , eyr] = /(eyr):(\d{4})/.exec(consolidatedPassport);
      const [, , hgt, unit] = /(hgt):(\d+)(cm|in)?/.exec(consolidatedPassport);
      const [, , hcl] = /(hcl):(#[0-9a-f]{6})?/.exec(consolidatedPassport);
      const [, , ecl] = /(ecl):(amb|blu|brn|gry|grn|hzl|oth)?/.exec(consolidatedPassport);
      const [, , pid] = /(pid):(\d*)?/.exec(consolidatedPassport);

      // Perform individual code's validation rules
      codes.forEach(code => {
        switch (code) {
          case 'byr': 
            if (byr >= 1920 && byr <= 2002) {
              validatedCodes.push(code);
            }
          
            break;
          
          case 'iyr': 
            if (iyr >= 2010 && iyr <= 2020) {
              validatedCodes.push(code);
            }
          
            break;
          
          case 'eyr': 
            if (eyr >= 2020 && eyr <= 2030) {
              validatedCodes.push(code);
            }
          
            break;
          
          case 'hgt': 
            if (hgt && unit) {
              if (unit.trim() === 'cm' && hgt >= 150 && hgt <= 193) {
                validatedCodes.push(code);
              } else if (unit.trim() === 'in' && hgt >= 59 && hgt <= 76) {
                validatedCodes.push(code);
              }
            }
          
            break;

          case 'hcl': 
            if (hcl && hcl.startsWith('#')) {
              if (hcl.substring(1).length === 6) {
                validatedCodes.push(code);
              }
            }
          
            break;

          case 'ecl':
            const validEyeCodes = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
            if (validEyeCodes.includes(ecl)) {
              validatedCodes.push(code);
            }
          
            break;

          case 'pid': 
            if (pid && pid.length === 9) {
              validatedCodes.push(code);
            }
          
            break;

          default:
            break;
        }
      });
      
      const isValidated = codes.every(x => validatedCodes.includes(x));
      
      if (isValidated) return validPassports + 1;

      return validPassports;

    }, 0);
}

module.exports = two;














// @adriennetacke
const two = (input) => {
  let passports = input.split('\n');
  let sortedPassports = [];
  let temp = [];

  // Sort codes into single passports
  for (let i = 0; i < passports.length; i++) {
    // console.log(i, passports[i]);
    if (passports[i] !== '') {
      temp.push(passports[i]);
    }

    if (i === passports.length - 1 || passports[i] == '') {
      sortedPassports.push(temp);
      temp = [];
    }
  }

  const codes = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'];

  let verifiedPassports = sortedPassports
    .map(passport => {
      // console.log("passport", passport);
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

      // console.log("consolidatedPassport", consolidatedPassport);
      if (verifiedCodes.length > 7) return consolidatedPassport;

      if (verifiedCodes.length == 7 && !verifiedCodes.includes('cid')) {
        return consolidatedPassport;
      }
    })
    .map(verifiedPassport => {
      console.log("here", verifiedPassport);
      const [, , byr] = /(byr)\:(\d*)/.exec(verifiedPassport);
      const [, , iyr] = /(iyr)\:(\d*)/.exec(verifiedPassport);
      const [, , eyr] = /(eyr)\:(\d*)/.exec(verifiedPassport);
      const [, , hgt, unit] = /(hgt)\:(\d*)(c*m*i*n*\s*)/.exec(verifiedPassport);
      const [, , hashSign, hcl] = /(hcl)\:(\#*)([0-9a-f]*)/.exec(verifiedPassport);
      const [, , ecl] = /(ecl)\:([a-z]{3})/.exec(verifiedPassport);
      const [, , pid] = /(pid)\:([0-9]{9})/.exec(verifiedPassport);

      // Have matches for codes
      // Need to validate based on rules for specific code

      if (byr >= 1920 && byr <= 2002) {
        // add to array? 
        // if array.length = required valid states, count  as valid passport
      }

      // TODO: The rest of the fucking codes

    });



  // .reduce((validPassports, currentPassport) => {
  //   const anotherOne = isNaN(currentPassport) ? 0 : currentPassport;
  //   return validPassports + anotherOne;
  // }, 0);
}

module.exports = two;














// @adriennetacke
const one = (input) => {
  let rules = input.split('\n');
  let allbags = {};

  // Create main object with all bags and their respective inner bags
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];

    const outermostBagPattern = /(\w*\s\w*)(\sbags)?\s(?:contain)\s/gm;
    const [, outermostBag] = outermostBagPattern.exec(rule);

    const cleanRule = rule.replace(outermostBagPattern, '').replace('.', '');
    const innerBags = cleanRule.split(',');

    allbags[outermostBag] = {
      innerTypes: {}
    };

    innerBags.forEach(bag => {
      const [, amount, bagType] = /(\d\s)?(\w+ \w+) bag(?:s)?(?:,)?/.exec(bag);

      if (bag !== 'no other bags') {
        allbags[outermostBag].innerTypes[bagType] = parseInt(amount.trim());
      }
    });  
  }
  
 // Recursive Helper function to continue path traversal
 // until we reach the end -> either a 'shiny gold' bag or
 // no other children
  let validBags = new Set();

  function findPaths(child, topLevelParent) {
    const children = Object.keys(allbags[child].innerTypes);

    if (children.includes('shiny gold')) {
      validBags.add(topLevelParent);
      return;
    }

    if (children.length === 0) return;

    for (let i = 0; i < children.length; i++) {
      findPaths(children[i], topLevelParent);
    }
  } 

  // Traverse paths to a 'shiny gold' bag
  const topLevelBags = Object.keys(allbags);

  for (let i = 0; i < topLevelBags.length; i++) {
    findPaths(topLevelBags[i], topLevelBags[i]);
  }

  return validBags.size;
}

module.exports = one;














// @adriennetacke
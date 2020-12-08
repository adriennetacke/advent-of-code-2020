const two = (input) => {
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

  let nestedBags = 0;

  // Recursive Helper function to continue path traversal
  // until there are no more nested bags to count
  function findPaths(child, topLevelBagCount) {
    const children = Object.keys(allbags[child].innerTypes);

    if (children.length === 0) return;

    for (let i = 0; i < children.length; i++) {
      const currentBagTotal = allbags[child].innerTypes[children[i]]; 
      const childrenToAdd = topLevelBagCount * currentBagTotal;

      nestedBags += childrenToAdd;
      findPaths(children[i], childrenToAdd); 
    }
  }

  findPaths('shiny gold', 1);

  return nestedBags;
}

module.exports = two;











// @adriennetacke
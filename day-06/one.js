const one = (input) => {
  let unsortedAnswers = input.split('\n');
  let groupAnswers = new Set();
  let totalAnswers = 0;

  for (let i = 0; i < unsortedAnswers.length; i++) {
    if (unsortedAnswers[i] !== '') {
      unsortedAnswers[i].split('').forEach(answer => groupAnswers.add(answer));
    }

    if (i === unsortedAnswers.length - 1 || unsortedAnswers[i] == '') {
      const totalGroupAnswers = groupAnswers.size;
      groupAnswers.clear();
      totalAnswers += totalGroupAnswers;
    }
  }
  
  return totalAnswers;
}

module.exports = one;














// @adriennetacke
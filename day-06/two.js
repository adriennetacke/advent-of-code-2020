const two = (input) => {
  let unsortedAnswers = input.split('\n');
  let totalAnswers = 0;

  let sortedAnswers = [];
  let temp = [];

  for (let i = 0; i < unsortedAnswers.length; i++) {
    if (unsortedAnswers[i] !== '') {
      temp.push(unsortedAnswers[i]);
    }

    if (i === unsortedAnswers.length - 1 || unsortedAnswers[i] == '') {
      sortedAnswers.push(temp);
      temp = [];
    }
  }

  sortedAnswers.forEach(answers => {
    const combinedAnswers = answers.join('');
    const distinctAnswers = [...new Set(combinedAnswers.split(''))];

    for (let i = 0; i < distinctAnswers.length; i++) {
      const answer = distinctAnswers[i];

      if (answers.every(x => x.includes(answer))) totalAnswers += 1;
    }
   
  });
  
  return totalAnswers;
}

module.exports = two;











// @adriennetacke
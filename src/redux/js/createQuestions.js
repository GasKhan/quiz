import { nanoid } from 'nanoid';

import setAnswers from './setAnswers';
import mixArray from './mixArray';

export default function createQuestionsArr(obj) {
  const questionsArr = [];
  for (let item of obj.results) {
    const answers = setAnswers(item);
    const mixedAnswers = mixArray(answers);
    questionsArr.push({
      question: item.question,
      id: nanoid(),
      answers,
    });
  }

  return questionsArr;
}

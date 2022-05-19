import { nanoid } from 'nanoid';

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

function setAnswers(obj) {
  const answersArr = obj.incorrect_answers.map((ans) => {
    return {
      text: ans,
      isTrue: false,
      isChosen: false,
      id: nanoid(),
    };
  });

  answersArr.push({
    text: obj.correct_answer,
    isTrue: true,
    isChosen: false,
    id: nanoid(),
  });

  return answersArr;
}

function mixArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (arr.length - 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

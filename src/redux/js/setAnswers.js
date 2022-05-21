import { nanoid } from 'nanoid';

export default function setAnswers(obj) {
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

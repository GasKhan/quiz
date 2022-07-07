import { useDispatch, useSelector } from 'react-redux';

import { add, clear } from '../../redux/reducers/scoresSlice';
import { finish, start } from '../../redux/reducers/finishSlice';

import fetchQuestions from '../../redux/js/fetchQuestions';

import './QuizPage.css';
import Question from '../question/Question';

export default function QuizPage() {
  const dispatch = useDispatch();

  const questionsArr = useSelector((store) => store.questions);
  const scores = useSelector((store) => store.scores);
  const finished = useSelector((store) => store.finish);

  console.log(questionsArr);

  function checkScores() {
    questionsArr.forEach((question) => {
      const rightAnswer = question.answers.find((answer) => answer.isTrue);
      const chosenAnswer = question.answers.find((answer) => answer.isChosen);

      if (rightAnswer === chosenAnswer) dispatch(add());
    });
    dispatch(finish());
  }

  const resetQuestions = async () => {
    dispatch(clear());
    await dispatch(fetchQuestions());
    dispatch(start());
  };

  const questions = questionsArr.map((item) => {
    return <Question item={item} answers={item} key={item.id} />;
  });

  return (
    <div className="quiz-page">
      <div className="quiz__container">
        {questions}
        {finished ? (
          <div className="quiz__results">
            <p className="quiz__results-text">
              You scored {scores}/5 correct answers
            </p>
            <button className="quiz__results-btn btn" onClick={resetQuestions}>
              Play again
            </button>
          </div>
        ) : (
          <button className="quiz__replay-btn btn" onClick={checkScores}>
            Check answers
          </button>
        )}
      </div>
    </div>
  );
}

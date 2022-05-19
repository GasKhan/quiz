import { useEffect, useState } from 'react';
import './QuizPage.css';
import Question from './Question';
import Answer from './Answer';
import Button from './Button';
import fetchQuestions from '../redux/reducers/fetchQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

export default function QuizPage() {
  const dispatch = useDispatch();
  const arr = useSelector((store) => store.questions);
  const questions = arr.map((item) => {
    return <Question item={item} answers={item} key={item.id} />;
  });

  return (
    <div className="quiz-page">
      <div className="quiz__container">
        {questions}
        <Button text="Check answers" padding="10px 21px" />
      </div>
    </div>
  );
}

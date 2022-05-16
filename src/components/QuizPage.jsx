import React from 'react';
import './QuizPage.css';
import Question from './Question';
import Button from './Button';

export default function QuizPage() {
  return (
    <div className="quiz-page">
      <div className="container">
        <Question />
        <Question />
        <Question />
        <Button text="Check answers" padding="10px 21px" />
      </div>
    </div>
  );
}

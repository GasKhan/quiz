import React, { useEffect } from 'react';
import './Question.css';
import Answer from './Answer';

export default function Question(props) {
  const answers = props.item.answers.map((answer) => {
    return <Answer item={answer} key={answer.id} parentId={props.item.id} />;
  });
  return (
    <div className="question">
      <h3 className="question__title">{props.item.question}</h3>
      <ul className="question__list">{answers}</ul>
    </div>
  );
}

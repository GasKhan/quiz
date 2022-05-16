import React from 'react';
import './Question.css';
import Answer from './Answer';

export default function Question() {
  return (
    <div className="question">
      <h3 className="question__title">this is a question</h3>
      <ul className="question__list">
        <Answer />
        <Answer />
        <Answer />
      </ul>
    </div>
  );
}

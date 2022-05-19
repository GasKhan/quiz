import React from 'react';
import './StartPage.css';
import './Button.css';
import { useDispatch } from 'react-redux';
import fetchQuestions from '../redux/reducers/fetchQuestions';

export default function StartPage(props) {
  const dispatch = useDispatch();
  function beginNewGame() {
    props.handler();
    dispatch(fetchQuestions());
  }
  return (
    <div className="start">
      <div className="start__container">
        <h1 className="start__title">Quizzical</h1>
        <h3 className="start__text">Some description if needed</h3>
        <button className="start__btn btn" onClick={beginNewGame}>
          Start quiz
        </button>
      </div>
    </div>
  );
}

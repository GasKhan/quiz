import React from 'react';
import './Button.css';
import fetchQuestions from '../redux/reducers/fetchQuestions';
import { useDispatch } from 'react-redux';

export default function Button(props) {
  const dispatch = useDispatch();
  const style = {
    padding: props.padding,
  };

  return (
    <div>
      <button
        className="btn"
        style={style}
        onClick={() => dispatch(fetchQuestions())}
        disabled={false}
      >
        {props.text}
      </button>
    </div>
  );
}

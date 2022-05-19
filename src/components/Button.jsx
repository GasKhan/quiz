import React from 'react';
import './Button.css';
import { setQuestions } from '../redux/reducers/questionsSlice';
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
        onClick={() => dispatch(setQuestions)}
        disabled={false}
      >
        {props.text}
      </button>
    </div>
  );
}

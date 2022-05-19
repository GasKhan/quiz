import React from 'react';
import { useSelector } from 'react-redux';
import './Answer.css';
import { useDispatch } from 'react-redux';
import { isChosen } from '../redux/reducers/questionsSlice';

export default function Answer(props) {
  const dispatch = useDispatch();
  const parentId = props.parentId;
  const id = props.item.id;

  return (
    <div
      className={props.item.isChosen ? 'answer_chosen' : 'answer'}
      onClick={() => dispatch(isChosen({ parentId, id }))}
    >
      {props.item.text}
    </div>
  );
}
// isChosen({ parentId: props.parentId, id: props.id })

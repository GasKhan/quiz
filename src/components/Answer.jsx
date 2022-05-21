import React from 'react';
import { useSelector } from 'react-redux';
import './Answer.css';
import { useDispatch } from 'react-redux';
import { mark } from '../redux/reducers/questionsSlice';

export default function Answer(props) {
  const finished = useSelector((store) => store.finish);
  const dispatch = useDispatch();

  let bgColor = '';
  if (props.item.isTrue && finished) {
    bgColor = 'answer_chosen_right';
  } else if (props.item.isChosen && !props.item.isTrue && finished) {
    bgColor = 'answer_chosen_wrong';
  } else if (props.item.isChosen) {
    bgColor = 'answer_chosen';
  }

  const parentId = props.parentId;
  const id = props.item.id;

  return (
    <div
      className={`answer ${bgColor}`}
      onClick={() => {
        if (!finished) {
          dispatch(mark({ parentId, id }));
        }
      }}
    >
      {props.item.text}
    </div>
  );
}

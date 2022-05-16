import React from 'react';
import './Button.css';

export default function Button(props) {
  const style = {
    padding: props.padding,
  };
  return (
    <button className="btn" style={style}>
      {props.text}
    </button>
  );
}

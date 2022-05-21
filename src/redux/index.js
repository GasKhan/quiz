import { configureStore } from '@reduxjs/toolkit';
import questions from './reducers/questionsSlice';
import finish from './reducers/finishSlice';
import scores from './reducers/scoresSlice';

const store = configureStore({
  reducer: {
    questions,
    scores,
    finish,
  },
});

export default store;

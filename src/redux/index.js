import { configureStore } from '@reduxjs/toolkit';
import questions from './reducers/questionsSlice';

const store = configureStore({
  reducer: {
    questions,
  },
});

export default store;

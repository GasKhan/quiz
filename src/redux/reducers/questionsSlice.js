import { createSlice } from '@reduxjs/toolkit';
import fetchQuestions from './fetchQuestions';
import createQuestions from './createQuestions';

const questionsSlice = createSlice({
  name: 'questions',
  initialState: [],
  reducers: {
    set: {
      reducer: (state, action) => {
        return state.concat(action.payload);
      },
    },
    isChosen: {
      reducer: (state, action) => {
        const { parentId, id } = action.payload;

        return state.map((question) => {
          if (question.id === parentId) {
            const newAnswers = question.answers.map((answer) => {
              if (answer.id === id) {
                return { ...answer, isChosen: true };
              } else {
                return { ...answer, isChosen: false };
              }
            });
            return { ...question, answers: newAnswers };
          }
          return question;
        });
        // const chosenQuestion = state.find(
        //   (question) => question.id === parentId
        // );
        // chosenQuestion.answers.forEach((answer) => {
        //   if (answer.id === id) answer.isChosen = true;
        //   answer.isChosen = false;
        // });
        // return state;
      },
    },
  },
  extraReducers: {
    [fetchQuestions.fulfilled]: (state, action) => {
      const data = createQuestions(action.payload);
      return data;
    },
  },
});

export let { set: setQuestions, isChosen } = questionsSlice.actions;
export default questionsSlice.reducer;

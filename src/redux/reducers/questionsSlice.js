import { createSlice } from '@reduxjs/toolkit';
import fetchQuestions from './fetchQuestions';
import createQuestions from './createQuestions';

const questionsSlice = createSlice({
  name: 'questions',
  initialState: [],
  reducers: {
    mark: {
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

export const { mark } = questionsSlice.actions;
export default questionsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const finishSlice = createSlice({
  name: 'finish',
  initialState: false,
  reducers: {
    start: (state) => {
      return false;
    },
    finish: (state) => {
      return true;
    },
  },
});

export const { start, finish } = finishSlice.actions;
export default finishSlice.reducer;

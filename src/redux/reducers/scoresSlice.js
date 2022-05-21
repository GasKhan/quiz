import { createSlice } from '@reduxjs/toolkit';

const scoreSlice = createSlice({
  name: 'score',
  initialState: 0,
  reducers: {
    add: (state, action) => {
      return (state = state + 1);
    },
    clear: (state, action) => {
      return 0;
    },
  },
});

export const { add, clear } = scoreSlice.actions;
export default scoreSlice.reducer;

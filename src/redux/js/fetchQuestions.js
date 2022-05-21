import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchQuestions = createAsyncThunk('questions/fetch', async () => {
  const response = await fetch('https://opentdb.com/api.php?amount=5');
  const questions = await response.json();
  return questions;
});

export default fetchQuestions;

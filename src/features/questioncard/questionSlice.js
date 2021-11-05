import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  questions: [
    { question: "1 + 1 + 1 = ?", choices: [1, 2, 3, 4], correct: 3 },
    { question: "2 + 2 + 2 = ?", choices: [2, 4, 6, 8], correct: 6 },
    { question: "3 + 3 + 3 = ?", choices: [9, 18, 20, 22], correct: 9 },
    { question: "4 + 4 + 4 = ?", choices: [10, 12, 13, 14], correct: 12 },
    { question: "5 + 5 + 5 = ?", choices: [1, 15, 40, 200], correct: 15 },
  ],
};

export const questionSlice = createSlice({
  name: "questionCard",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    incrementScore(state) {
      state.score += 1;
    },
  },
});

export const { incrementScore } = questionSlice.actions;

export const selectScore = (state) => state.questionCard.score;

export const selectQuestions = (state) => state.questionCard.questions;

export default questionSlice.reducer;

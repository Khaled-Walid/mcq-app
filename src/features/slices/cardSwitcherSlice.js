import { createSlice } from "@reduxjs/toolkit";

const initialState = "name";

export const cardSwitcherSlice = createSlice({
  name: "cardSwitcher",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    gotoQuestion() {
      return "question";
    },
    gotoResult() {
      return "result";
    },
  },
});

export const { gotoQuestion, gotoResult } = cardSwitcherSlice.actions;

export const selectCurrentCard = (state) => state.cardSwitcher;

export default cardSwitcherSlice.reducer;

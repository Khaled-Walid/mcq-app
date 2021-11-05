import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "../features/namecard/nameSlice";
import cardSwitcherReducer from "../features/cardSwitcherSlice";
import questionCardReducer from "../features/questioncard/questionSlice";

export const store = configureStore({
  reducer: {
    name: nameReducer,
    cardSwitcher: cardSwitcherReducer,
    questionCard: questionCardReducer,
  },
});

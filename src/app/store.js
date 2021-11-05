import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "../features/slices/nameSlice";
import cardSwitcherReducer from "../features/slices/cardSwitcherSlice";
import questionCardReducer from "../features/slices/questionSlice";

export const store = configureStore({
  reducer: {
    name: nameReducer,
    cardSwitcher: cardSwitcherReducer,
    questionCard: questionCardReducer,
  },
});

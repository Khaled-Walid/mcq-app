import { configureStore } from '@reduxjs/toolkit';
import nameReducer from '../features/namecard/nameSlice';
import cardSwitcherReducer from '../features/cardSwitcherSlice';

export const store = configureStore({
  reducer: {
    name: nameReducer,
    cardSwitcher: cardSwitcherReducer,
  },
});

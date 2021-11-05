import { configureStore } from '@reduxjs/toolkit';
import nameReducer from '../features/namecard/nameSlice';

export const store = configureStore({
  reducer: {
    name: nameReducer,
  },
});

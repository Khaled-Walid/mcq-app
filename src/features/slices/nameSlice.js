import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const nameSlice = createSlice({
  name: "name",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setName: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;

export const selectName = (state) => state.name;

export default nameSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: '',
};

export const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    setTitle:(state, actions) => {
        state.title = actions.payload
    }
  }
});

export const { setTitle } = titleSlice.actions;

export default titleSlice.reducer;
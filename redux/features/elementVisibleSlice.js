import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elementVisible: true,
};

export const elementVisibleSlice = createSlice({
  name: "elementVisible",
  initialState,
  reducers: {
    setElementVisible:(state, actions) => {
        state.elementVisible = actions.payload
    }
  }
});

export const { setElementVisible } = elementVisibleSlice.actions;

export default elementVisibleSlice.reducer;
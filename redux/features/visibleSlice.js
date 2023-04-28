import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: false,
};

export const visibleSlice = createSlice({
  name: "visible",
  initialState,
  reducers: {
    setVisible:(state, actions) => {
        state.visible = actions.payload
    }
  }
});

export const { setVisible } = visibleSlice.actions;

export default visibleSlice.reducer;
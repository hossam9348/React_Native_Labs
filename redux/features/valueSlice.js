import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const valueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    setValue:(state, actions) => {
      // console.log(actions.payload)
     state.value = actions.payload
    }
  }
});

export const { setValue } = valueSlice.actions;

export default valueSlice.reducer;
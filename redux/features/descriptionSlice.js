import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  description: '',
};

export const descriptionSlice = createSlice({
  name: "description",
  initialState,
  reducers: {
    setDescription:(state, actions) => {
        state.description = actions.payload
    }
  }
});

export const { setDescription } = descriptionSlice.actions;

export default descriptionSlice.reducer;
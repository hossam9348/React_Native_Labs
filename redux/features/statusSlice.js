import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 'all',
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setStatus:(state, actions) => {
        state.status = actions.payload
    }
  }
});

export const { setStatus } = statusSlice.actions;

export default statusSlice.reducer;
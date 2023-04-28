import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosKeys: [],
};

export const todosKeysSlice = createSlice({
  name: "todosKeys",
  initialState,
  reducers: {
    setTodosKeys:(state, actions) => {
        state.todosKeys= actions.payload
    }
  }
});

export const { setTodosKeys } = todosKeysSlice.actions;

export default todosKeysSlice.reducer;
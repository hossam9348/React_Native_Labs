import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "../features/titleSlice";
import descriptionReducer from "../features/descriptionSlice";
import todosKeysReducer from "../features/todosKeysSlice";
import statusReducer from "../features/statusSlice";
import visibleReducer from "../features/visibleSlice";
import  elementVisibleReducer from "../features/elementVisibleSlice";
import valueReducer from "../features/valueSlice";


export const store = configureStore({
  reducer: {
    title: titleReducer,
    description: descriptionReducer,
    todosKeys: todosKeysReducer,
    status: statusReducer,
    visible: visibleReducer,
    elementVisible: elementVisibleReducer,
    value: valueReducer,
  },
});

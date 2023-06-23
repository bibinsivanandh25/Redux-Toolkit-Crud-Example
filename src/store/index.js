import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    contact: contactReducer,
    ui: uiReducer,
  },
});

export default store;

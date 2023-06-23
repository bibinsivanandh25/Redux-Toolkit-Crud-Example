import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showLoader: (state, action) => {
      state.loading = true;
    },
  },
});

export const { showLoader } = uiSlice.actions;

export default uiSlice.reducer;

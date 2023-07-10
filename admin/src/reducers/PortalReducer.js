import { configureStore, createSlice } from "@reduxjs/toolkit";

const portalSlice = createSlice({
  name: "portal",
  initialState: {
    isVisible: false,
  },
  reducers: {
    togglePortal: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const togglePortal = portalSlice.actions.togglePortal;

export default portalSlice.reducer;

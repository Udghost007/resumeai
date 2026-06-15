import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  toast: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },
    setToast: (state, action) => {
      state.toast = action.payload;
    },
    clearToast: (state) => {
      state.toast = null;
    },
  },
});

export const { toggleSidebar, closeSidebar, setToast, clearToast } = uiSlice.actions;
export default uiSlice.reducer;

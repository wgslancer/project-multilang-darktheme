import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: true,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      const temp = state.darkTheme;
      state.darkTheme = !temp;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    { id: 0, name: "home", path: "/" },
    { id: 1, name: "login", path: "/login" },
  ],
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    addCategories({ categories }, action) {
      categories.push(action.payload);
    },
  },
});

export const { addCategories } = headerSlice.actions;
export default headerSlice.reducer;

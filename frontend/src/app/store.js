import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../redux/Slice";

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});

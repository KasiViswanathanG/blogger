import { configureStore } from "@reduxjs/toolkit";
import blogViewReducer from "../features/blogView";

const store = configureStore({
  reducer: {
    blogView: blogViewReducer,
  },
});

export default store;

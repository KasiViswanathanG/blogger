import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isblogView: false,
  id: 1,
  author: "",
  title: "",
  description: "",
  url: "",
  urlToImage: "",
  publishedAt: "",
  content: "",
};

const blogViewSlice = createSlice({
  name: "blogView",
  initialState,
  reducers: {
    blogView: (state, action) => {
      state.isblogView = true;
      const { a, t, d, u, ur, p, c } = action.payload;
      console.log(a, t, d, u, ur, p, c);
      state.author = a;
      state.title = t;
      state.description = d;
      state.url = u;
      state.urlToImage = ur;
      state.publishedAt = p;
      state.content = c;
    },
    unblogView: (state) => {
      state.isblogView = false;
    },
  },
});

export default blogViewSlice.reducer;
export const { blogView, unblogView } = blogViewSlice.actions;

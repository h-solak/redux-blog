import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import moment from "moment";
let initialState = [
  {
    id: nanoid(),
    title: "Learning Redux Toolkit",
    content:
      "Since I need to learn this toolkit for the company I work for, I decided to make this project!",
    date: moment().startOf("hour").fromNow(),
  },
  {
    id: nanoid(),
    title: "Having fun...",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam aut at quos cumque, rem id mollitia provident rerum totam vel odio nobis nihil suscipit voluptatum ea ad sint non?",
    date: moment().startOf("hour").fromNow(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addNewPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      state.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addNewPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;

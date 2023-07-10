import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postsReducer from "../reducers/postReducers";
import MusicReducer from "../reducers/MusicReducer";
import userReducer from "../reducers/userReducer";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    music: MusicReducer,
    user: userReducer,
  },
  middleware: [thunk],
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserReducer";
import commentReducer from "./reducers/CommentReducer";
import postsReducer from "./reducers/postsReducer";
import portalReducer from "./reducers/PortalReducer";

const rootReducer = {
  users: userReducer,
  comments: commentReducer,
  posts: postsReducer,
  portal: portalReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const postsSlice = createSlice({
  name: "posts",
  initialState: { data: [] },
  reducers: {
    setPosts: (state, action) => {
      return action.payload;
    },
    setNotActivePosts: (state, action) => {
      state.notActivePosts = action.payload;
    },

    deletePost: (state, action) => {
      const postId = action.payload;
      return state.filter((post) => post.id !== postId);
    },
    acceptPost: (state, action) => {
      const postId = action.payload;
      const postIndex = state.notActivePosts.findIndex(
        (post) => post.id === postId
      );
      if (postIndex !== -1) {
        const acceptedPost = state.notActivePosts[postIndex];
        state.notActivePosts.splice(postIndex, 1);
        state.data.push(acceptedPost);
      }
    },
    rejectPost: (state, action) => {
      const postId = action.payload;
      state.notActivePosts = state.notActivePosts.filter(
        (post) => post.id !== postId
      );
    },
  },
});

export const {
  setPosts,
  setNotActivePosts,
  deletePost,
  acceptPost,
  rejectPost,
} = postsSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/posts/");
    const posts = response.data;
    dispatch(setPosts(posts));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const fetchNotActivePosts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/posts/request");
    const notActivePosts = response.data.data; // Access the "data" property in the response
    dispatch(setNotActivePosts(notActivePosts));
  } catch (error) {
    console.error("Error fetching not active posts:", error);
  }
};

export const deletePostData = (postId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/posts/${postId}`);
    dispatch(deletePost(postId));
  } catch (error) {
    console.error(`Error deleting post with ID ${postId}:`, error);
  }
};

export const acceptPostData = (postId) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:5000/posts/accept/${postId}`);
    dispatch(acceptPost(postId)); // Pass postId as payload
  } catch (error) {
    console.error(`Error accepting post with ID ${postId}:`, error);
  }
};

export const rejectPostData = (postId) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:5000/posts/reject/${postId}`);
    dispatch(rejectPost(postId)); // Pass postId as payload
  } catch (error) {
    console.error(`Error rejecting post with ID ${postId}:`, error);
  }
};

export default postsSlice.reducer;

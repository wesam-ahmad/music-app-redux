import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const commentSlice = createSlice({
  name: "comments",
  initialState: { data: [] },
  reducers: {
    setComments: (state, action) => {
      return action.payload;
    },
    deleteCommentData: (state, action) => {
      const commentId = action.payload;
      state.data = state.data.filter((comment) => comment.id !== commentId);
    },
  },
});

export const { setComments, deleteCommentData } = commentSlice.actions;

export const fetchComments = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/comments/");
    const comments = response.data;
    dispatch(setComments(comments));
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};

export const deleteComment = (userId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/comments/${userId}`);
    dispatch(deleteCommentData(userId));
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
  }
};
export default commentSlice.reducer;

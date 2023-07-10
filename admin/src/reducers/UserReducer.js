import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "users",
  initialState: { data: [] },
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      return state.filter((user) => user.id !== userId);
    },
  },
});

// user actions

export const { setUsers, deleteUser } = userSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(" http://localhost:5000/users/");
    const users = response.data;
    dispatch(setUsers(users));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const deleteUserData = (userId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    dispatch(deleteUser(userId));
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
  }
};
export const deletePostData = (postId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    dispatch(deletePost(postId));
  } catch (error) {
    console.error(`Error deleting post with ID ${postId}:`, error);
  }
};

export default userSlice.reducer;

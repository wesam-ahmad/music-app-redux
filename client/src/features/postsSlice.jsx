import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        id: 0,
        author: "",
        title: "",
        description: "",
        image: "",
        date: "",
        comments: [
          {
            author: "",
            title: "",
            description: "",
            date: "",
          },
        ],
      },
    ],
  },
  reducers: {
    set: (state, action) => {
      console.log(actions.payload);
      return (state = action.payload);
    },
  },
});

export const fetchDataPending = () => {
  return {
    type: "FETCH_DATA_PENDING",
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: "FETCH_DATA_FAILURE",
    payload: error,
  };
};

// Define your initial state
const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataPending());
    try {
      const response = await axios.get(apiUrl);
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const { set } = postsSlice.actions;

export const selectPosts = (state) => state.posts;
// console.log(selectPosts());

export default postsSlice.reducer;

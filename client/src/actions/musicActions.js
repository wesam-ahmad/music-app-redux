import axios from "axios";
import { useDispatch } from "react-redux";

// const dispatch = useDispatch();

export const getMusic = (url) => {
  // Thunk Function
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      const data = response.data.items;
      dispatch({
        type: "GET_MUSIC",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setCurrentMusic = (music) => {
  return {
    type: "SET_MUSIC",
    payload: music,
  };
};

export const getTrendingMusic = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/6efad571-22f8-43e7-9e36-c7c71ac41798"
      );
      const data = response.data.items;
      console.log(data);
      dispatch({
        type: "GET_Trending_Music",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setFavoriteMusic = (music) => {
  return {
    type: "SET_FAVORITE_MUSIC",
    payload: music,
  };
};
export const getFavoriteMusic = () => {
  return {
    type: "GET_FAVORITE_MUSIC",
  };
};

// export const decPlay = (state = ) => {
//   console.log(state.user);
//   // state = { ...state, user: { ...state.user, plays: state?.user.plays - 1 } };
// };

// export const addPlays = () => {
//   dispatch({
//     type: "ِADD_PLAYS",
//   });
// };

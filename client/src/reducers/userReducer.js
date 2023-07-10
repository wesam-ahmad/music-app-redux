// src/reducers/userReducer.js
const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    case "DEC_PLAY":
      console.log(state.user, state.user.plays);
      return {
        ...state,
        user: { ...state.user, plays: state.user.plays - 1 },
      };
    case "ADD_PLAYS":
      return {
        ...state,
        user: { ...state.user, plays: state.user.plays + 20 },
      };
    default:
      return state;
  }
};

export default userReducer;

const initState = {
  music: [],
  currentMusic: [],
  trendingMusic: [],
  favoriteMusic: [],
};

const MusicReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MUSIC":
      return { ...state, music: action.payload };
    case "GET_Trending_Music":
      return { ...state, trendingMusic: action.payload };
    case "SET_MUSIC":
      return { ...state, currentMusic: action.payload };

    case "SET_FAVORITE_MUSIC": {
      const existingIndex = state.favoriteMusic.findIndex(
        (music) => music.name === action.payload.name
      );
      if (existingIndex !== -1) {
        const updatedFavoriteMusic = [...state.favoriteMusic];
        updatedFavoriteMusic.splice(existingIndex, 1);
        return { ...state, favoriteMusic: updatedFavoriteMusic };
      } else {
        return {
          ...state,
          favoriteMusic: [...state.favoriteMusic, action.payload],
        };
      }
    }

    case "GET_FAVORITE_MUSIC":
      return {
        ...state,
        favoriteMusic: state.favoriteMusic,
      };
    default:
      return state;
  }
};

export default MusicReducer;

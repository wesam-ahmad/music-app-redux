const initState = {
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
};

const MusicReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, posts: action.payload };
    case "ADD_POST":
      console.log(state, state.posts, action.payload);
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};

export default MusicReducer;

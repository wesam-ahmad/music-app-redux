import axios from "axios";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/posts");
      const data = response.data.data;
      console.log(data);
      dispatch({
        type: "GET_POSTS",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
export const addPost = (author_id, title, description, image) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/posts", {
        author: author_id,
        title,
        description,
        image,
      });
      const data = response.data.data;
      console.log(data);
      dispatch({
        type: "ADD_POST",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

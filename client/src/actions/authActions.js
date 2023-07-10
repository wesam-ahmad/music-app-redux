import axios from "axios";

export const login = (user) => {
  return async (dispatch) => {
    console.log(user.email, user.password);
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: user.email,
        password: user.password,
      });
      //   const data = response.data.data;
      //   console.log(response);
      console.log(response.data);
      dispatch({
        type: "LOGIN",
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const signup = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/signUp", {
        username: user.username,
        email: user.email,
        password: user.password,
      });

      //   const data = response.data;
      console.log(response.data);
      //   localStorage.setItem("token", response.data.token);
      dispatch({
        type: "LOGIN",
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

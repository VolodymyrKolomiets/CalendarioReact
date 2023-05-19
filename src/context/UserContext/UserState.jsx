import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const initialState = {
  user: null,
};

const API_URL = "http://localhost:8080";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const register = async (user) => {
    try {
      const res = await axios.post(API_URL + "/users/createUser", user);
      dispatch({
        type: "REGISTER",
        payload: res.data,
      });

      if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "REGISTER_ERROR",
        payload: error.response.data.messages,
      });
    }
  };

  const login = async (user) => {
    try {
      const res = await axios.post(API_URL + "/users/login", user);
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });

      if (res.data && res.data.token) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      }

      if (res.data && res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "LOGIN_ERROR",
        payload: error.response.data.message,
      });
    }
  };

  const getUserInfo = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.get(API_URL + "/users/getUserInfo", {
        headers: {
          Authorization: token,
        },
      });
      dispatch({
        type: "GET_USER_INFO",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: "GET_USER_INFO_ERROR",
        payload: "Error al obtener la información del usuario.",
      });
    }
  };

  const logout = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.delete(API_URL + "/users/logout", {
        headers: {
          Authorization: token,
        },
      });
      dispatch({
        type: "LOGOUT",
        payload: res.data,
      });
      if (res.data) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "LOGOUT_ERROR",
        payload: "Error al cerrar sesión.",
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        message: state.message,
        logoutMessage: state.logoutMessage,
        register,
        login,
        getUserInfo,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

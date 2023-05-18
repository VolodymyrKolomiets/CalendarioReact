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
        const res = await axios.post(API_URL + "/users/createUser", user);
        dispatch({
            type: "REGISTER",
            payload: res.data,
        });

        if (res.data) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
        }
    };
 
    return (
        <UserContext.Provider
          value={{
            user: state.user,
            register
          }}
        >
          {children}
        </UserContext.Provider>
      );
    };
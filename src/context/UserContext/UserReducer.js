const users = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        token: action.payload.token,
        message: action.payload.message,
      };

    case "REGISTER_ERROR":
      return {
        ...state,
        message: action.payload
      };

    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        message: action.payload.message,
        user: action.payload.user
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        message: action.payload
      };

    case "GET_USER_INFO":
      return {
        ...state,
        user: action.payload,
        message: "",
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        message: "",

      };


    default:
      return state;
  }
};
export default users;
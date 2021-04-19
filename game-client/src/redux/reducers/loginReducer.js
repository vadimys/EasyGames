import types from "../constants";

let userId = localStorage.getItem("easy-games-user-id");
const initialState = userId ? {
  loggingIn: false,
  isLoggedIn: true,
  user: {
    id: userId
  }
} : {
  loggingIn: false,
  isLoggedIn: false,
  user: null
};

export function login(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        isLoggedIn: false,
        loggingIn: true
      };
    case types.LOGIN_SUCCESS:
      localStorage.setItem("easy-games-user-id", action.user.id.toString());

      return {
        isLoggedIn: true,
        loggingIn: false,
        user: action.user
      };
    case types.LOGIN_ERROR:
      return { ...initialState };
    case types.LOGOUT:
      localStorage.removeItem("easy-games-user-id");

      return {
        loggingIn: false,
        isLoggedIn: false
      };
    case types.GET_GAMES_PROPS_ERROR:
      return action.error !== 404 ? { ...state } : {
        isLoggedIn: false,
        loggingIn: false,
        user: null
      };
    default:
      return state;
  }
}

import types from '../actions/constants';

let user = JSON.parse(localStorage.getItem('easy-games-user'));
const initialState = user ? { loggedIn: true, user } : {};

export  default function authentication(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        isLoggedIn: false,
        loggingIn: true,
        user: action.user
      };
    case types.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        loggedIn: true,
        user: action.user
      };
    case types.LOGIN_FAILURE:
      return {};
    case types.LOGOUT:
      return {};
    default:
      return state
  }
}

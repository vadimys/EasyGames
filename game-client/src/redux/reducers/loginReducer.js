import types from '../constants';

let userId = localStorage.getItem('easy-games-user-id');
const initialState = userId ? {
    isLoggedIn: true, user: {
      id: userId
    }
  } : {};

export function login(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        isLoggedIn: false,
        loggingIn: true
      };
    case types.LOGIN_SUCCESS:
      localStorage.setItem('easy-games-user-id', action.user.id.toString());

      return {
        isLoggedIn: true,
        loggingIn: false,
        user: action.user
      };
    case types.LOGIN_ERROR:
      return {};
    case types.LOGOUT:
      localStorage.removeItem('easy-games-user-id');

      return {};
    default:
      return state;
  }
}

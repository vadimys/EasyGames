import types from '../constants';

let userId = localStorage.getItem('easy-games-user-id');
const initialState = userId ? {
    isLoggedIn: true, user: {
      _id: userId
    }
  } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        isLoggedIn: false,
        loggingIn: true
      };
    case types.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        loggingIn: false,
        user: action.user
      };
    case types.LOGIN_FAILURE:
      return {};
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
}

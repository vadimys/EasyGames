import { post } from '../../service/HttpRequests';
import types from '../constants';
import alert from './AlertActions';

const login = (username, password) => {
  function request(user) {
    return { type: types.LOGIN_REQUEST, user };
  }

  function success(user) {
    return { type: types.LOGIN_SUCCESS, user };
  }

  function failure(error) {
    return { type: types.LOGIN_FAILURE, error };
  }

  return dispatch => {
    dispatch(request({ username }));

    post('/signin', { username, password })
      .then(res => {
        dispatch(success(res.data.user));
        localStorage.setItem('easy-games-user-id', res.data.user._id);
      })
      .catch(err => {
        dispatch(failure(err.toString()));
        dispatch(alert.error(err.toString()));
      });
  };
};

const register = (userData) => {
  function request(user) {
    return { type: types.REGISTER_REQUEST, user };
  }

  function success(user) {
    return { type: types.REGISTER_SUCCESS, user };
  }

  function failure(error) {
    return { type: types.REGISTER_FAILURE, error };
  }

  return dispatch => {
    dispatch(request(userData));

    post('/signup', { userData })
      .then(() => {
        dispatch(success());
        dispatch(alert.success('Registration successful'));
      })
      .catch(error => {
          dispatch(failure(error.toString()));
          dispatch(alert.error(error.toString()));
        }
      );
  };
};

const logout = () => {
  localStorage.removeItem('easy-games-user-id');
  return { type: types.LOGOUT };
};

export default {
  login,
  register,
  logout
};

import { post } from '../../utils/HttpRequests';
import types from '../types';
import history from '../../../History';
import alert from '../../alert/actions/AlertActions';

const login = (username, password) => {
  function request(user) { return { type: types.LOGIN_REQUEST, user } }
  function success(user) { return { type: types.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: types.LOGIN_FAILURE, error } }

  return dispatch => {
    dispatch(request({ username }));

    post('/login', { username, password })
      .then(res => {
        dispatch(success(res));
        history.push('/');
      })
      .catch(err => {
        dispatch(failure(err.toString()));
        dispatch(alert.error(err.toString()));
      });
  }
}

const register = (userData) => {
  function request(user) { return { type: types.REGISTER_REQUEST, user } }
  function success(user) { return { type: types.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: types.REGISTER_FAILURE, error } }

  return dispatch => {
    dispatch(request(userData));

    post('/register', { userData })
      .then(res => {
          dispatch(success());
          history.push('/login');
          // dispatch(alert.success('Registration successful'));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alert.error(error.toString()));
        }
      );
  };
}

const logout = () => {
  localStorage.removeItem('easy-games-user');
  return { type: types.LOGOUT };
}

export default {
  login,
  register,
  logout
}

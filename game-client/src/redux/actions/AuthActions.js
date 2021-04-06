import types from '../constants';

const onLogin = ({ username, password }) => ({ type: types.LOGIN, username, password });
const loginRequest = () => ({ type: types.LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: types.LOGIN_SUCCESS, user });
const loginError = (error) => ({ type: types.LOGIN_ERROR, error });

const onRegister = (data) => ({ type: types.REGISTER, data });
const registerRequest = (data) => ({ type: types.REGISTER_REQUEST, data });
const registerSuccess = (user) => ({ type: types.REGISTER_SUCCESS, user });
const registerError = (error) => ({ type: types.REGISTER_ERROR, error });

const onLogOut = () => ({ type: types.LOGOUT });

export default {
  onLogin,
  loginRequest,
  loginSuccess,
  loginError,

  onRegister,
  registerRequest,
  registerSuccess,
  registerError,

  onLogOut
};

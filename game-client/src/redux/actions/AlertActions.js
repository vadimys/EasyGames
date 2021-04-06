import types from '../constants';

export default {
  success,
  error,
  clear
};

function success(message) {
  return { type: types.SUCCESS_ACTION, message };
};

function error(message) {
  return { type: types.ERROR_ACTION, message };
}

function clear() {
  return { type: types.CLEAR_ACTION };
}

import types from './constants';

export default {
  success,
  error,
  clear
};

function success(message) {
  return { type: types.SUCCESS, message };
};


function error(message) {
  return { type: types.ERROR, message };
}

function clear() {
  return { type: types.CLEAR };
}

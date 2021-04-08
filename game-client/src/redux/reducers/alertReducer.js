import types from '../constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case types.SUCCESS_ACTION:
      return {
        type: 'alert-success',
        message: action.message
      };
    case types.ERROR_ACTION:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case types.CLEAR_ACTION:
      return {};
    default:
      return state;
  }
}

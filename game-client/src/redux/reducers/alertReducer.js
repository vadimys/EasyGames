import types from '../actions/constants';

export default function alert(state = {}, action) {
  switch (action.type) {
    case types.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case types.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case types.CLEAR:
      return {};
    default:
      return state
  }
}

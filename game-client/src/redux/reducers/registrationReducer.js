import types from '../constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return {
        registered: false,
        registering: true
      };
    case types.REGISTER_SUCCESS:
      return {
        registered: true,
        registering: false
      };
    case types.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}

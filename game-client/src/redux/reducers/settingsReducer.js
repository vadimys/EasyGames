import types from '../constants';

const initialState = {
  firstStep: false,
  gripSymbol: 'O'
};

export function settings(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_SETTINGS_RESPONSE:
      return {
        ...state,
      };
    case types.CHANGE_SETTINGS_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
}

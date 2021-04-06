import types from '../constants';

const initialState = {
  isGot: false,
  list: [],
  favorite: [],
  like: []
};

export function games(state = initialState, action) {
  switch (action.type) {
    case types.GET_GAMES_REQUEST:
      return {
        ...state,
        isGot: false
      };
    case types.GET_GAMES_SUCCESS:
      const { list } = action;

      return {
        ...state,
        isGot: true,
        list
      };
    case types.UPDATE_GAME_PROP_SUCCESS:
      const { data, type } = action.data;

      return {
        ...state,
        [type]: data
      };
    case types.GET_GAMES_PROPS_SUCCESS:
      const { favorite, like } = action.data;

      return { ...state, favorite, like };
    case types.UPDATE_GAME_PROP_ERROR:
      return { ...state };
    case types.GET_GAMES_PROPS_ERROR:
      return { ...state };
    case types.GET_GAMES_ERROR:
      return { ...state };
    default:
      return state;
  }
}

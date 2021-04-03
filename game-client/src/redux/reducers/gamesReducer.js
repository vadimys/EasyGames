import types from '../constants';

const initialState = {
  isGot: false,
  list: [],
  favorite: [],
  like: []
};

export function allGames(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_GAMES_REQUEST:
      return {
        ...state,
        isGot: false
      };
    case types.GET_ALL_GAMES_SUCCESS:
      const { list, favorite, like } = action.data;

      return { isGot: true, list, favorite, like };
    case types.UPDATE_GAME_TYPE:
      const { data, type } = action.data;

      return {
        ...state,
        [type]: data
      };
    case types.UPDATE_GAME_TYPE_FAILURE:
      return {...state};
    case types.GET_ALL_GAMES_FAILURE:
      return {...state};
    default:
      return state;
  }
}

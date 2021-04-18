import types from '../constants';

const initialState = {
  isGotGames: false,
  isGotGameProps: false,
  list: [],
  favorite: [],
  like: []
};

export function games(state = initialState, action) {
  switch (action.type) {
    // start --- GET_GAMES
    case types.GET_GAMES_REQUEST:
      return {
        ...state,
        isGotGames: false
      };
    case types.GET_GAMES_SUCCESS:
      const { list } = action;

      return {
        ...state,
        isGotGames: true,
        list
      };
    case types.GET_GAMES_ERROR:
      return { ...state };
    // end --- GET_GAMES
    // start --- UPDATE_GAME_PROP
    case types.UPDATE_GAME_PROP_SUCCESS:
      const { data, type } = action.data;

      return {
        ...state,
        [type]: data
      };
    case types.UPDATE_GAME_PROP_ERROR:
      return { ...state };
    // end --- UPDATE_GAME_PROP
    // start --- GET_GAMES_PROPS
    case types.GET_GAMES_PROPS_SUCCESS:
      const { favorite, like } = action.data;

      return {
        ...state,
        isGotGameProps: true,
        favorite,
        like };
    case types.GET_GAMES_PROPS_REQUEST:
      return {
        ...state,
        isGotGameProps: false,
      };
    case types.GET_GAMES_PROPS_ERROR:
      return {
        ...state,
        isGotGameProps: false,
      };
    // end --- GET_GAMES_PROPS
    default:
      return state;
  }
}

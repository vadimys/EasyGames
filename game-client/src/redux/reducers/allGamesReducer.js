import types from '../constants';

export function allGames(state = {}, action) {
  switch (action.type) {
    case types.GET_ALL_GAMES_REQUEST:
      return {
        gamesGot: false,
        games: state.games
      };
    case types.GET_ALL_GAMES_SUCCESS:
      return {
        gamesGot: true,
        games: action.games
      };
    case types.UPDATE_GAME_TYPE:
      return {
        ...state,
        games: state.games.map((game) => {
          if (game.id === action.data.id) {
            return {
              ...game,
              [action.data.type === types.FAVORITE ? 'isFavorite' : 'isLike']: action.data.value
            };
          }

          return game;
        })
      };
    case types.GET_ALL_GAMES_FAILURE:
      return {};
    default:
      return state;
  }
}

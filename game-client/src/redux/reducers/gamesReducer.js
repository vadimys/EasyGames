import types from '../constants';

const initialState = {
  gamesGot: false,
  games: [],
  favorites: []
};

export function allGames(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_GAMES_REQUEST:
      return {
        gamesGot: false,
        games: action.games, // TODO: init games
        favorites: []
      };
    case types.GET_ALL_GAMES_SUCCESS:
      return {
        gamesGot: true,
        games: action.games,
        favorites: action.favorites
      };
    case types.UPDATE_GAME_FAVORITES:
      const { value, id } = action.data;
      const favorites = [...state.favorites];
      const index = favorites.indexOf(id);

      if (value) {
        index === -1 && favorites.push(id);
      } else {
        index !== -1 && favorites.splice(index);
      }

      return { ...state, favorites };
    case types.GET_ALL_GAMES_FAILURE:
      return {};
    default:
      return state;
  }
}

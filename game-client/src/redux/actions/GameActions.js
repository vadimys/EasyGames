import types from '../constants';

const getGames = () => ({ type: types.GET_GAMES });
const getGamesRequest = () => ({ type: types.GET_GAMES_REQUEST });
const getGamesSuccess = (list) => ({ type: types.GET_GAMES_SUCCESS, list });
const getGamesError = (error) => ({ type: types.GET_GAMES_ERROR, error });

const updateGameProp = (data) => ({ type: types.UPDATE_GAME_PROP, data });
const updateGamePropSuccess = (data) => ({ type: types.UPDATE_GAME_PROP_SUCCESS, data });
const updateGamePropError = () => ({ type: types.UPDATE_GAME_PROP_ERROR });

const getGamesProps = (id) => ({ type: types.GET_GAMES_PROPS, id });
const getGamesPropsSuccess = (data) => ({ type: types.GET_GAMES_PROPS_SUCCESS, data });
const getGamesPropsError = () => ({ type: types.GET_GAMES_PROPS_ERROR });

export default {
  getGames,
  getGamesRequest,
  getGamesSuccess,
  getGamesError,

  updateGameProp,
  updateGamePropSuccess,
  updateGamePropError,

  getGamesProps,
  getGamesPropsSuccess,
  getGamesPropsError
};

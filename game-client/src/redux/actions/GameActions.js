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

const startGame = (data) => ({ type: types.START_GAME, data });
const startGameRequest = () => ({ type: types.START_GAME_REQUEST });
const startGameSuccess = (data) => ({ type: types.START_GAME_SUCCESS, data });
const startGameCanceled = (error) => ({ type: types.START_GAME_CANCELED, error });
const startGameError = (error) => ({ type: types.START_GAME_ERROR, error });

const finishGame = (sessionId) => ({ type: types.FINISH_GAME, sessionId });
const finishGameSuccess = () => ({ type: types.FINISH_GAME_SUCCESS });
const finishGameError = (error) => ({ type: types.FINISH_GAME_ERROR, error });

const onGameAction = (data) => ({ type: types.GAME_ACTION, data });
const onGameActionRequest = () => ({ type: types.GAME_ACTION_REQUEST });
const onGameActionResponse = (data) => ({ type: types.GAME_ACTION_RESPONSE, data });
const onGameActionError = (data) => ({ type: types.GAME_ACTION_ERROR, data });

export default {
  getGames,
  getGamesRequest,
  getGamesSuccess,
  getGamesError,

  startGame,
  startGameRequest,
  startGameSuccess,
  startGameCanceled,
  startGameError,

  finishGame,
  finishGameSuccess,
  finishGameError,

  onGameAction,
  onGameActionRequest,
  onGameActionResponse,
  onGameActionError,

  updateGameProp,
  updateGamePropSuccess,
  updateGamePropError,

  getGamesProps,
  getGamesPropsSuccess,
  getGamesPropsError
};

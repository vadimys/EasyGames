import types from '../constants';

const getGames = () => ({ type: types.GET_GAMES });
const getGamesRequest = () => ({ type: types.GET_GAMES_REQUEST });
const getGamesSuccess = (list) => ({ type: types.GET_GAMES_SUCCESS, list });
const getGamesError = (error) => ({ type: types.GET_GAMES_ERROR, error });

const getGamesByUserId = (data) => ({ type: types.GET_GAME_BY_USER_ID, data });
const getGamesByUserIdSuccess = (data) => ({ type: types.GET_GAME_BY_USER_ID_SUCCESS, data });
const getGamesByUserIdError = (error) => ({ type: types.GET_GAME_BY_USER_ID_ERROR, error });

const updateGameProp = (data) => ({ type: types.UPDATE_GAME_PROP, data });
const updateGamePropSuccess = (data) => ({ type: types.UPDATE_GAME_PROP_SUCCESS, data });
const updateGamePropError = () => ({ type: types.UPDATE_GAME_PROP_ERROR });

const getGamesProps = (id) => ({ type: types.GET_GAMES_PROPS, id });
const getGamesPropsSuccess = (data) => ({ type: types.GET_GAMES_PROPS_SUCCESS, data });
const getGamesPropsError = (error) => ({ type: types.GET_GAMES_PROPS_ERROR, error });

const initGame = () => ({ type: types.INIT_GAME });
const startGame = (data) => ({ type: types.START_GAME, data });
const startGameRequest = () => ({ type: types.START_GAME_REQUEST });
const startGameSuccess = (data) => ({ type: types.START_GAME_SUCCESS, data });
const startGameCanceled = (error) => ({ type: types.START_GAME_CANCELED, error });
const startGameError = (error) => ({ type: types.START_GAME_ERROR, error });

const restartGame = (data) => ({ type: types.RESTART_GAME, data });
const restartGameRequest = () => ({ type: types.RESTART_GAME_REQUEST });
const restartGameSuccess = (data) => ({ type: types.RESTART_GAME_SUCCESS, data });
const restartGameCanceled = (error) => ({ type: types.RESTART_GAME_CANCELED, error });
const restartGameError = (error) => ({ type: types.RESTART_GAME_ERROR, error });

const finishGame = (sessionId) => ({ type: types.FINISH_GAME, sessionId });
const finishGameSuccess = () => ({ type: types.FINISH_GAME_SUCCESS });
const finishGameError = (error) => ({ type: types.FINISH_GAME_ERROR, error });

const saveGame = (sessionId) => ({ type: types.SAVE_GAME, sessionId });
const saveGameSuccess = () => ({ type: types.SAVE_GAME_SUCCESS });
const saveGameError = (error) => ({ type: types.SAVE_GAME_ERROR, error });

const onGameAction = (data) => ({ type: types.GAME_ACTION, data });
const onGameActionRequest = () => ({ type: types.GAME_ACTION_REQUEST });
const onGameActionResponse = (data) => ({ type: types.GAME_ACTION_RESPONSE, data });
const onGameActionError = (data) => ({ type: types.GAME_ACTION_ERROR, data });

export default {
  getGames,
  getGamesRequest,
  getGamesSuccess,
  getGamesError,

  getGamesByUserId,
  getGamesByUserIdSuccess,
  getGamesByUserIdError,

  initGame,
  startGame,
  startGameRequest,
  startGameSuccess,
  startGameCanceled,
  startGameError,

  restartGame,
  restartGameRequest,
  restartGameSuccess,
  restartGameCanceled,
  restartGameError,

  finishGame,
  finishGameSuccess,
  finishGameError,

  saveGame,
  saveGameSuccess,
  saveGameError,

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

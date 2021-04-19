import { takeLatest } from "redux-saga/effects";
import types from "../../constants";
import {
  finishGame,
  gameAction,
  getGames,
  getGamesByUserId,
  getGamesProps,
  restartGame,
  startGame,
  saveGame,
  updateGameProp
} from "../gameSaga";

export function* games() {
  yield takeLatest(types.GET_GAMES, getGames);
  yield takeLatest(types.GET_GAME_BY_USER_ID, getGamesByUserId);
  yield takeLatest(types.GET_GAMES_PROPS, getGamesProps);
  yield takeLatest(types.UPDATE_GAME_PROP, updateGameProp);

  yield takeLatest(types.START_GAME, startGame);
  yield takeLatest(types.RESTART_GAME, restartGame);
  yield takeLatest(types.SAVE_GAME, saveGame);
  yield takeLatest(types.FINISH_GAME, finishGame);
  yield takeLatest(types.GAME_ACTION, gameAction);
}

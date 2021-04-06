import { takeLatest } from 'redux-saga/effects';
import types from '../../constants';
import { getGames, getGamesProps, updateGameProp } from '../gameSaga';

export function* games() {
  yield takeLatest(types.GET_GAMES, getGames);
  yield takeLatest(types.GET_GAMES_PROPS, getGamesProps);
  yield takeLatest(types.UPDATE_GAME_PROP, updateGameProp);
}

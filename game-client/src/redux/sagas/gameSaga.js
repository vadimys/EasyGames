import { call, put, select } from "redux-saga/effects";
import actions from "../../redux/actions/GameActions";
import { get, post } from "../../service/HttpRequests";

export const getUser = (state) => state.login;

export function* getGames() {
  try {
    yield put(actions.getGamesRequest());

    const res = yield call(() => get('/games'));
    const { list } = res.data;
    const { user } = yield select(getUser);

    yield put(actions.getGamesSuccess(list));

    if (user) {
      yield getGamesProps({ id: user.id });
    }
  } catch (error) {
    yield put(actions.getGamesError(Number(error.message)));
  }
}

export function* getGamesByUserId(data) {
  try {
    const res = yield call(() => post('/game', data.data));

    yield put(actions.getGamesByUserIdSuccess(res.data));
  } catch (error) {
    yield put(actions.getGamesByUserIdError(Number(error.message)));
  }
}

export function* getGamesProps(data) {
  try {
    const res = yield call(() => get('/props', data.id));
    const { favorite, like } = res.data;

    yield put(actions.getGamesPropsSuccess({ favorite, like }));
  } catch (error) {
    yield put(actions.getGamesPropsError(Number(error.message)));
  }
}

export function* updateGameProp(data) {
  try {
    const { value, id, type, userId } = data.data;
    const res = yield call(() => post(`/update/${type}`, { userId, value, type, gameId: id }));

    yield put(actions.updateGamePropSuccess({ type, data: res.data }));
  } catch (error) {
    yield put(actions.updateGamePropError(Number(error.message)));
  }
}

export function* startGame(data) {
  try {
    yield put(actions.startGameRequest());

    const res = yield call(() => post(`/start`, data.data));

    yield put(actions.startGameSuccess(res.data));
  } catch (error) {
    yield put(actions.startGameError(Number(error.message)));
  }
}

export function* restartGame(data) {
  try {
    yield put(actions.restartGameRequest());

    const res = yield call(() => post(`/restart`, data.data));

    yield put(actions.restartGameSuccess(res.data));
  } catch (error) {
    yield put(actions.restartGameError(Number(error.message)));
  }
}

export function* finishGame(sessionId) {
  try {
    yield call(() => post(`/finish`, sessionId));
    yield put(actions.finishGameSuccess());
  } catch (error) {
    yield put(actions.finishGameError(Number(error.message)));
  }
}

export function* saveGame(sessionId) {
  try {
    yield call(() => post(`/save`, sessionId));
    yield put(actions.saveGameSuccess());
  } catch (error) {
    yield put(actions.saveGameError(Number(error.message)));
  }
}

export function* gameAction(data) {
  try {
    yield put(actions.onGameActionRequest());

    const res = yield call(() => post(`/action`, data.data));

    yield put(actions.onGameActionResponse(res.data));
  } catch (error) {
    yield put(actions.onGameActionError(Number(error.message)));
  }
}

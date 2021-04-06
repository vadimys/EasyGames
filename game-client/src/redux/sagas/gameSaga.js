import { call, put, select } from 'redux-saga/effects';
import actions from '../../redux/actions/GameActions';
import { get, post } from '../../service/HttpRequests';

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
    yield put(actions.getGamesError(error.toString()));
  }
}

export function* getGamesProps(data) {
  try {
    const res = yield call(() => get('/props', data.id));
    const { favorite, like } = res.data;

    yield put(actions.getGamesPropsSuccess({ favorite, like }));
  } catch (error) {
    yield put(actions.getGamesPropsError(error.toString()));
  }
}

export function* updateGameProp(data) {
  try {
    const { value, id, type, userId } = data.data;
    const res = yield call(() => post(`/update/${type}`, { userId, value, type, gameId: id }));

    yield put(actions.updateGamePropSuccess({ type, data: res.data }));
  } catch (error) {
    yield put(actions.updateGamePropError(error.toString()));
  }
}

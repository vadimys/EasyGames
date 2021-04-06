import { call, put } from 'redux-saga/effects';
import auth from '../actions/AuthActions';
import alert from '../actions/AlertActions';
import { post } from '../../service/HttpRequests';
import { getGamesProps } from './gameSaga';

export function* login(data) {
  try {
    yield put(auth.loginRequest());

    const res = yield call(() => post('/signin', data));

    yield put(auth.loginSuccess(res.data));
    yield getGamesProps({ id: res.data.id });
  } catch (error) {
    yield put(alert.error(error.toString()));
    yield put(auth.loginError(error.toString()));
  }
}

export function* register(data) {
  try {
    yield put(auth.registerRequest(data));
    yield call(() => post('/signup', data));
    yield put(auth.registerSuccess());
  } catch (error) {
    yield put(alert.error(error.toString()));
    yield put(auth.registerError(error.toString()));
  }
}

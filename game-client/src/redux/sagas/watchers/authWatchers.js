import { takeLatest } from 'redux-saga/effects';
import types from '../../constants';
import { login, register } from '../authSaga';

export function* auth() {
  yield takeLatest(types.LOGIN, login);
  yield takeLatest(types.REGISTER, register);
}

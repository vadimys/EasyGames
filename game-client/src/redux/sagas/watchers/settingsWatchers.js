import { takeLatest } from 'redux-saga/effects';
import types from '../../constants';
import { firstStep } from '../settingsSaga';

export function* settings() {
  yield takeLatest(types.CHANGE_SETTINGS, firstStep);
}

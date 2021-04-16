import { call, put } from "redux-saga/effects";
import settings from "../actions/SettingsAction";
import { post } from "../../service/HttpRequests";

export function* firstStep(data) {
  try {
    const res = yield call(() => post('/settings', data));

    yield put(settings.onChangeSettingsResponse(res.data));
  } catch (error) {
    yield put(settings.onChangeSettingsError(error.toString()));
  }
}

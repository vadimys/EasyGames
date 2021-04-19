import { call, put } from "redux-saga/effects";
import auth from "../actions/AuthActions";
import alert from "../actions/AlertActions";
import { post } from "../../service/HttpRequests";
import { getGamesProps } from "./gameSaga";

export function* login(data) {
  try {
    yield put(auth.loginRequest());

    const res = yield call(() => post("/signin", data));

    yield put(auth.loginSuccess(res.data));
    yield getGamesProps({ id: res.data.id });
  } catch (error) {
    const status = Number(error.message);
    const message = status === 404
      ? "Oops...User not found!"
      : status === 401
        ? "Invalid password!"
        : "Sorry, Network ERROR!";

    yield put(alert.error(message));
    yield put(auth.loginError());
  }
}

export function* register(data) {
  try {
    yield put(auth.registerRequest(data));
    yield call(() => post("/signup", data));
    yield put(auth.registerSuccess());
  } catch (error) {
    const status = Number(error.message);
    const message = status === 418
      ? "Username is already in use!"
      : status === 400
        ? "Email is already in use!"
        : "Sorry, Network ERROR!";

    yield put(alert.error(message));
    yield put(auth.registerError());
  }
}

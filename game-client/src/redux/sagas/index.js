import { all } from 'redux-saga/effects';
import { games } from './watchers/gameWatchres';
import { auth } from './watchers/authWatchers';
import { settings } from './watchers/settingsWatchers';

export default function* root() {
  yield all([
    games(),
    auth(),
    settings()
  ]);
}

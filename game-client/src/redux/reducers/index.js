import { combineReducers } from 'redux';
import { login } from './loginReducer';
import { registration } from './registrationReducer';
import { alert } from './alertReducer';
import { games } from './gamesReducer';

const rootReducer = combineReducers({
  login,
  registration,
  alert,
  games
});

export default rootReducer;
